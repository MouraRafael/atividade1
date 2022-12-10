import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FornecedorModel } from '../models/fornecedor.model';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000';
const HTTP_OPTIONS = {
  headers:new HttpHeaders(
  {'Content-Type': 'application/json;charset=utf-8'}
)}


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

  cadastraFornecedor(fornecedor:FornecedorModel){
    console.log(fornecedor)
    return this.http.post(`${API_URL}/fornecedor`,fornecedor,HTTP_OPTIONS)
  }
}
