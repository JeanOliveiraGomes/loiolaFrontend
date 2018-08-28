import { UsuarioService } from './../../services/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credenciais = { username: null, password:null};


  constructor( private router: Router,public usuarioService:UsuarioService) { }

  ngOnInit() {
  }


  login(){
    this.usuarioService.login(this.credenciais).subscribe((data: any)=>{
      this.router.navigate(['checkin']);
    }, error =>{
     
    });  
    
  }

}
