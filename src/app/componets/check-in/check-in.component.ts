import { Router } from '@angular/router';
import { UsuarioService } from './../../services/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { QuartoService } from '../../services/quarto/quarto.service';


@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  public userForm: FormGroup;
  public reservaForm: FormGroup;
  public quartosForm: FormGroup;
  quartosDisponiveis: Array<any>;
  quartosSelecionados: Array<any>;
  reservadoUsuario: any
  quartosReservaUsuario: Array<any>;
  responseReserva: any;
  elementoRemovido1: any

  reservaData = {
    dataCheckin: '',
    dataCheckout: '',
    quartos: [
      {
        quantidade: '',
        id: {
          quarto: {
            id: ''
          }
        }
      }
    ]
  }





  validation_messages = {
    'checkin': [
      { type: 'required', message: 'Esse campo é obrigatorio.' }
    ],
    'checkout': [
      { type: 'required', message: 'Esse campo é obrigatorio.' }
    ],
    'quantidade': [
      { type: 'required', message: 'Esse campo é obrigatorio.' }
    ],
    'quarto': [
      { type: 'required', message: 'Esse campo é obrigatorio.' }
    ],
  };

  constructor(
    public formBuilder: FormBuilder,
    private quartoService: QuartoService,
    public usuarioService: UsuarioService,
    private router: Router
    
  ) {
    if(usuarioService.token==null){
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    this.createFormsDisponibilidade();
    this.createFormsReserva();
    this.createFormsQuartos();

  }

  onSubmit(userForm) {
    if (userForm) {
      console.log(userForm.value)
      this.quartoService.disponiveis(userForm.value).subscribe(data => {
        const response = (data as any)
        this.quartosDisponiveis = response;
        this.reservaData.dataCheckin = this.userForm.controls.checkin.value
        this.reservaData.dataCheckout = this.userForm.controls.checkout.value
        console.log(data)
        console.log(this.reservaData.dataCheckin)
        console.log(this.reservaData.dataCheckout)

      })
    }

  }


  addQuarto(quartosForm) {

    let id
    switch (this.quartosForm.controls.idQuarto.value) {
      case "Casal":
        id = 1
        break;
      case "Solteiro":
        id = 2
        break;
      case "Luxo":
        id = 3
        break;
      case "Qtd...":
        id = 5
        break;
      default:
        confirm("Cadastre esse tipo no sistema.");
    }


    this.reservaData.quartos.push({
      quantidade: this.quartosForm.controls.quantidade.value,
      id: {
        quarto: {
          id: id
        }
      }
    })
    this.quartosSelecionados = this.reservaData.quartos



  }
  onSubmitReserva(reservaForm) {

    this.reservaData.dataCheckin = this.reservaForm.controls.dataCheckin.value;
    this.reservaData.dataCheckout = this.reservaForm.controls.dataCheckout.value;
    const index = this.reservaData.quartos[0].quantidade.indexOf('');
    this.elementoRemovido1 = this.reservaData.quartos.splice(index, 1);

    this.quartoService.reservar(this.reservaData).subscribe(data => {
      const response = (data as any);
      this.reservadoUsuario = response
      
      console.log(this.reservadoUsuario)
      this.quartosReservaUsuario =  this.reservadoUsuario.quartos
      console.log(this.quartosReservaUsuario)
      
    })



  }

  createFormsDisponibilidade() {
    this.userForm = this.formBuilder.group({
      checkin: new FormControl('', [Validators.required]),
      checkout: new FormControl('', [Validators.required])
    });
  }

  createFormsReserva() {
    this.reservaForm = this.formBuilder.group({
      dataCheckin: new FormControl('', [Validators.required]),
      dataCheckout: new FormControl('', [Validators.required]),

    });
  }
  createFormsQuartos() {
    this.quartosForm = this.formBuilder.group({
      quantidade: new FormControl('', [Validators.required]),
      idQuarto: new FormControl('', [Validators.required]),
    });
  }

}
