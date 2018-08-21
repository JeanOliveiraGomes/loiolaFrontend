import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'http://localhost:8080/api';

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  get(endpoint: string,  header: any) {
    return this.http.get(this.url + '/' + endpoint, header);
  }
  getSemCabecalho(endpoint: string) {
    return this.http.get(this.url + '/' + endpoint);
  }

  post(endpoint: string, body: any, header: any) {
    return this.http.post(this.url + '/' + endpoint, body, header);
  }

  put(endpoint: string, body: any, header: any) {
    return this.http.put(this.url + '/' + endpoint, body, header);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }

}
