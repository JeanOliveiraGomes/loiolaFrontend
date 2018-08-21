import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  token:string =null;

  constructor(private api: ApiService) { }

  login(credenciais: any){
  
    let request = this.api.post('login',credenciais, {responseType: 'text'});
    return request;
  }

  cadastrar(usuario){
    let headers = new HttpHeaders().set('Content-Type','application/json');
    let requisicao = this.api.post('usuarios',usuario,{headers});
    return requisicao;
  }

}
