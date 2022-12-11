import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FornecedorModel } from '../models/fornecedor.model';
import { Observable } from 'rxjs';
import { ProdutoModel } from '../models/produto.model';

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

  cadastraFornecedor(fornecedor:FornecedorModel){
    console.log(fornecedor)
    return this.http.post(`${API_URL}/fornecedor`,fornecedor,HTTP_OPTIONS)
  }

  listarFornecedores():Observable<FornecedorModel[]>{
    return this.http.get<FornecedorModel[]>(`${API_URL}/fornecedor`);
  }
  getFornecedor(id:number):Observable<FornecedorModel>{
    return this.http.get<FornecedorModel>(`${API_URL}/fornecedor/${id}`,HTTP_OPTIONS);
  }
  atualizaFornecedor(fornecedor:FornecedorModel):Observable<any>{
    return this.http.put(`${API_URL}/fornecedor/${fornecedor.id}`,fornecedor,HTTP_OPTIONS)
  }
  deletaFornecedor(id:number):Observable<any>{
    return this.http.delete(`${API_URL}/fornecedor/${id}`,HTTP_OPTIONS)
  }




  cadastraProduto(produto:ProdutoModel){
    const prod = JSON.stringify(produto);
    const produtoCadastro:ProdutoModel = JSON.parse(prod) as ProdutoModel
    console.log(produtoCadastro)
    return this.http.post(`${API_URL}/produto`,produtoCadastro,HTTP_OPTIONS)
  }
  listarProdutos():Observable<ProdutoModel[]>{
    return this.http.get<ProdutoModel[]>(`${API_URL}/produto`)
  }
  getProduto(id:number):Observable<ProdutoModel>{
    return this.http.get<ProdutoModel>(`${API_URL}/produto/${id}`,HTTP_OPTIONS);
  }
  deletaProduto(id:number){
    return this.http.delete(`${API_URL}/produto/${id}`,HTTP_OPTIONS)
  }

}
