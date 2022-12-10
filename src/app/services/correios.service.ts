import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EnderecoModel } from '../models/endereco.model';

@Injectable({
  providedIn: 'root'
})
export class CorreiosService {

  constructor(
    private http:HttpClient
  ) { }


  pegaEndereco(cep:string):Observable<EnderecoModel>{
    return this.http.get<EnderecoModel>(`${environment.correiosWS}/${cep}/json`)
  }
}
