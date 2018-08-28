import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { QuartoService } from '../../services/quarto/quarto.service';
import {UsuarioService} from '../../services/usuario/usuario.service'


@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  public userForm: FormGroup;
  public reservaForm: FormGroup;
  quartosDisponiveis: Array<any>;
  responseReserva:any;
 
  reservaData =  {
    dataCheckin: '',
    dataCheckout: '',
    quartos:  [
      {
        quantidade:'' ,
        id: {
          quarto: {
            id:'' 
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
    private quartoService:QuartoService,
    public usuarioService:UsuarioService
  ) { 
    
  }

  ngOnInit() {
    this.createFormsDisponibilidade();
    this.createFormsReserva();
    
  }

  onSubmit(userForm){
    if(userForm){
      console.log(userForm.value)
      this.quartoService.disponiveis(userForm.value).subscribe(data=>{
        const response= (data as any)
        this.quartosDisponiveis = response;
        this.reservaData.dataCheckin = this.userForm.controls.checkin.value
        this.reservaData.dataCheckout = this.userForm.controls.checkout.value
        console.log(data)
        console.log(this.reservaData.dataCheckin)
        console.log(this.reservaData.dataCheckout)
        
      })
    }

  }
  onSubmitReserva(reservaForm){
    let id: any;
    

  switch (this.reservaForm.controls.quarto.value) {
    case "Casal":
      id = 1
      break;
    case "Solteiro":
      id = 2
      break;
    case "Luxo":
      id = 3
      break;
    default:
      confirm("Cadastre esse tipo no sistema.");
  }
  this.reservaData.dataCheckin = this.reservaForm.controls.dataCheckin.value;
  this.reservaData.dataCheckout = this.reservaForm.controls.dataCheckout.value;
  this.reservaData.quartos[0].quantidade = this.reservaForm.controls.quantidade.value
  this.reservaData.quartos[0].id.quarto.id =  id;
  if(this.reservaData){
    this.quartoService.reservar(this.reservaData).subscribe(data=>{
      const response = (data as any)
      this.responseReserva = response;
      console.log(this.responseReserva)
    })
  } 
  }

  createFormsDisponibilidade(){
    this.userForm = this.formBuilder.group({
      checkin : new FormControl('', [Validators.required]),
      checkout : new FormControl('', [Validators.required])
    });
  }

  createFormsReserva(){
    this.reservaForm = this.formBuilder.group({
      dataCheckin : new FormControl('', [Validators.required]),
      dataCheckout : new FormControl('', [Validators.required]),
      quantidade: new FormControl('', [Validators.required]),
      quarto : new FormControl('', [Validators.required]),
      
    });
  }

}
