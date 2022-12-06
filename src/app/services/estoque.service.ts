import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FornecedorModel } from '../models/fornecedor.model';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000';
const HTTP_OPTIONS = new HttpHeaders(
  {'Content-Type': 'application/json;charset=utf-8'}
);


@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(
    private http:HttpClient,
  ) { }


    getFornecedor():Observable<FornecedorModel[]>{
      return this.http.get<FornecedorModel[]>(`${API_URL}/fornecedor`);
    }
}
