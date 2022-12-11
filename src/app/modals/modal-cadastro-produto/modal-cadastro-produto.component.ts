import { Component, Input, OnInit } from '@angular/core';
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

  @Input() editable:boolean = false;
  @Input() produto!:ProdutoModel;


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
      precoCompra:['',[Validators.required, Validators.min(0)]],
      fornecedor:this.formBuilder.group({
        id:['',[Validators.required]]
      }),
      percentagemLucro:['', [Validators.required, Validators.min(1)]],
    })


    if(this.editable){
      console.log("Editar Produto \n", this.produto)
      this.carregaForm()
    }

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





  carregaForm(){
    this.cadastroProdutoForm.patchValue({
      nome: this.produto.nome,
      estoque: this.produto.estoque,
      precoCompra: this.produto.precoCompra,
      fornecedor: this.produto.fornecedor,
      percentagemLucro: this.produto.percentagemLucro
    })
  }

  editarProduto(){
    const produto = this.cadastroProdutoForm.getRawValue() as ProdutoModel;
    const fornecedor = this.fornecedores.filter(fornecedor => fornecedor.id == produto.fornecedor.id)[0]
    produto.fornecedor.razaoSocial = fornecedor.razaoSocial
    produto.precoVenda = produto.precoCompra+(produto.precoCompra * this.margem/100)
    produto.id = this.produto.id

    this.service.atualizaProduto(produto).subscribe({
      next:()=>{
        this.fechaModal()
      },
      error: (err) => console.error("Error:",err)
    })

  }





  get nome(){return this.cadastroProdutoForm.get('nome')?.value}
  get estoque(){return this.cadastroProdutoForm.get('estoque')?.value}
  get preco(){return this.cadastroProdutoForm.get('precoCompra')?.value}
  get margem(){return this.cadastroProdutoForm.get('percentagemLucro')?.value}
  get fornecedor(){return this.cadastroProdutoForm.get('fornecedor')?.get('id')?.value}
}
