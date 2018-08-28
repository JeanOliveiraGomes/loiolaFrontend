import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { HttpHeaders } from '@angular/common/http';
import {UsuarioService} from '../usuario/usuario.service'

@Injectable({
  providedIn: 'root'
})
export class QuartoService {
  
  constructor( public api: ApiService, public user:UsuarioService ) { 
    
  }
 
  disponiveis(value){

    let headers = new HttpHeaders().set('Content-Type','application/json').set('Authorization', this.user.getToken())                           
    let requisicao = this.api.get(`quartos/disponiveis?checkin=${value.checkin}&checkout=${value.checkout}`, {headers});
    return requisicao;
  }

  reservar(value){

    let headers = new HttpHeaders().set('Content-Type','application/json').set('Authorization', this.user.getToken())                           
    let requisicao = this.api.post('reservas', value, {headers});
    return requisicao;
  }
}
