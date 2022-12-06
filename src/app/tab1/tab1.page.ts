import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FornecedorModel } from '../models/fornecedor.model';
import { EstoqueService } from '../services/estoque.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  asdf = 'kokoko'
  fornecedor!:FornecedorModel[]
  produtosForm!:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private service:EstoqueService,
    private router:Router
  ) {}

  toCadastroFornecedores(){
    this.router.navigateByUrl('tabs/tab1/cadforn')
  }


  async getFornecedor(){
    await this.service.getFornecedor().subscribe({
      next:(result)=>{
        this.fornecedor = result;
        console.log(this.fornecedor)
        console.log(this.fornecedor[0].endereço)
      }
    })
  }
}
