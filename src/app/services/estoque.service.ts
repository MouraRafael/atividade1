import { Injectable } from '@angular/core';
import { FornecedorModel } from '../models/fornecedor.model';
import { Observable, map } from 'rxjs';
import { ProdutoModel } from '../models/produto.model';

import { collection, collectionData, deleteDoc, doc, docSnapshots, Firestore, setDoc } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(
    private firestore:Firestore
  ) { }

  cadastraFornecedor(fornecedor:FornecedorModel):Promise<void>{
    const document = doc(collection(this.firestore,'fornecedores'));
    return setDoc(document,fornecedor)
  }

  listarFornecedores():Observable<FornecedorModel[]>{
    const fornecedor = collection(this.firestore, 'fornecedores');
    return collectionData(fornecedor, {idField: 'id'})
    .pipe(
      map(result => result as FornecedorModel[])
    )
  }
  getFornecedor(id:string):Observable<FornecedorModel>{
    const document = doc(this.firestore, `fornecedores/${id}`);
    return docSnapshots(document)
    .pipe(
      map(
        doc => {
          const id = doc.id;
          const data = doc.data();
          return {id, ...data} as FornecedorModel;
        }
      )
    )
  }
  atualizaFornecedor(fornecedor:FornecedorModel):Promise<void>{
    console.log(fornecedor)
    const document = doc(this.firestore, 'fornecedores', fornecedor?.id);
    const {id, ...data} = fornecedor;
    return setDoc(document,data)
  }
  deletaFornecedor(id:string):Promise<void>{
    const document = doc(this.firestore,'fornecedores',id);
    return deleteDoc(document)
  }




  cadastraProduto(produto:ProdutoModel):Promise<void>{
    const document = doc(collection(this.firestore,'produtos'));
    return setDoc(document,produto);
  }
  listarProdutos():Observable<ProdutoModel[]>{
    const produtos = collection(this.firestore,'produtos');
    return collectionData(produtos,{idField:'id'}).pipe(
      map(result => result as ProdutoModel[])
    )
  }
  getProduto(id:string):Observable<ProdutoModel>{
    const document = doc(this.firestore, `produtos/${id}`);
    return docSnapshots(document).pipe(
      map(
        doc => {
          const id = doc.id;
          const data = doc.data();
          return {id , ...data} as ProdutoModel;
        }
      )
    )
  }
  deletaProduto(id:string):Promise<void>{
    const document = doc(this.firestore,'produtos',id)
    return deleteDoc(document)
  }
  atualizaProduto(produto:ProdutoModel):Promise<void>{
    const document = doc(this.firestore,'produtos', produto?.id);
    const { id, ...data } = produto;
    return setDoc(document, data)
  }

}
