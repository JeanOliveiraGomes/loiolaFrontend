import { UsuarioService } from './../../services/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credenciais = { cpf: null, senha:''};


  constructor( private router: Router,private usuarioService:UsuarioService) { }

  ngOnInit() {
  }


  login(){
    this.usuarioService.login(this.credenciais).subscribe((data: any)=>{
      console.log(data);
      this.usuarioService.token = data;
      this.router.navigate(['/home']);
    }, error =>{
     
    });  
    
  }

}
