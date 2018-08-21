import { UsuarioService } from './../../services/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  usuario = { cpf: '', senha:'', nome:''};
  
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  registrar(){
    this.usuarioService.cadastrar(this.usuario).subscribe((resp) => {
      
    }, (error) => {
      
    }); 
} 

}
