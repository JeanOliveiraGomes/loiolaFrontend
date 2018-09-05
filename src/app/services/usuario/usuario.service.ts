import { Router } from '@angular/router';
import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  token:any =null;

  constructor(public api: ApiService,private router: Router) { }

  login(credenciais: any){
  
    let request = this.api.post('login',credenciais, {responseType: 'text'})

    request.subscribe(data=>{
      const resp =  data;
      this.token = resp;
      this.router.navigate(['checkin']);
    });
    return request;
  }

  cadastrar(usuario){
    let headers = new HttpHeaders().set('Content-Type','application/json');
    let requisicao = this.api.post('usuarios',usuario,{headers});
    return requisicao;
  }

  getToken(){
    return this.token;
  }

}
