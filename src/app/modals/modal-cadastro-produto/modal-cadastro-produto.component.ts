import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FornecedorModel } from 'src/app/models/fornecedor.model';
import { ProdutoModel } from 'src/app/models/produto.model';
import { EstoqueService } from 'src/app/services/estoque.service';

@Component({
  selector: 'app-modal-cadastro-produto',
  templateUrl: './modal-cadastro-produto.component.html',
  styleUrls: ['./modal-cadastro-produto.component.scss'],
})
export class ModalCadastroProdutoComponent implements OnInit {
  cadastroProdutoForm!:FormGroup;
  fornecedores:FornecedorModel[] =[];


  constructor(
    private modalCtrl:ModalController,
    private formBuilder:FormBuilder,
    private service:EstoqueService
  ) { }

  ngOnInit() {
    this.service.listarFornecedores().subscribe({
      next:(fornecedores)=>{
        fornecedores.forEach((f)=>{
          this.fornecedores.push(f)
        })
      },
      error:(err)=>{
        console.error(err)
      }
    })


    this.cadastroProdutoForm =  this.formBuilder.group({
      nome:['',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]],
      estoque:['',[Validators.required,Validators.min(0)]],
      precoCompra:[''],
      fornecedor:this.formBuilder.group({
        id:['']
      }),
      percentagemLucro:[''],
    })
  }

  fechaModal(){
    this.modalCtrl.dismiss(null,'cancel')
  }


  cadastrarProduto(){
    const produto = this.cadastroProdutoForm.getRawValue() as ProdutoModel;
    const fornecedor = this.fornecedores.filter(fornecedor => fornecedor.id == produto.fornecedor.id)[0]
    console.log(fornecedor)
    produto.fornecedor.razaoSocial = fornecedor.razaoSocial
    produto.precoVenda = produto.precoCompra+(produto.precoCompra * this.margem/100)


    this.service.cadastraProduto(produto).subscribe({
      next:(result)=>console.log(result),
      error:(error)=>console.log(error)
    })

  }
  get nome(){return this.cadastroProdutoForm.get('nome')?.value}
  get estoque(){return this.cadastroProdutoForm.get('estoque')?.value}
  get preco(){return this.cadastroProdutoForm.get('precoCompra')?.value}
  get margem(){return this.cadastroProdutoForm.get('percentagemLucro')?.value}
  get fornecedor(){return this.cadastroProdutoForm.get('fornecedor')?.get('id')?.value}
}
