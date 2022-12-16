import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
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
  @ViewChild('cadastraProdutoDirective') cadastraProdutoDirective!:FormGroupDirective;



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


    // this.cadastroProdutoForm =  this.formBuilder.group({
    //   nome:['',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]],
    //   estoque:['',[Validators.required,Validators.min(0)]],
    //   precoCompra:['',[Validators.required, Validators.min(0)]],
    //   fornecedor:this.formBuilder.group({
    //     id:['',[Validators.required]]
    //   }),
    //   percentagemLucro:['', [Validators.required, Validators.min(1)]],
    // })

    this.cadastroProdutoForm = new FormGroup({
      'nome':new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]),
      'estoque':new FormControl('',[Validators.required,Validators.min(0)]),
      'precoCompra':new FormControl('', [Validators.required, Validators.min(0)]),
      'fornecedor': new FormGroup({
        'id': new FormControl('',[Validators.required]),
      }),
      'percentagemLucro': new FormControl('',[Validators.required, Validators.min(1)])
    })







    if(this.editable){
      console.log("Editar Produto \n", this.produto)
      this.carregaForm()
    }

  }

  fechaModal(){
    this.modalCtrl.dismiss(null,'cancel')
  }


  cadastrarProduto(values:any){
    let novoProduto: ProdutoModel = {...values}

    const fornecedor = this.fornecedores.filter(fornecedor => fornecedor.id == novoProduto.fornecedor.id)[0]

    novoProduto.fornecedor.razaoSocial = fornecedor.razaoSocial
    novoProduto.precoVenda = novoProduto.precoCompra+(novoProduto.precoCompra * this.margem/100)

    console.log(novoProduto)

    this.service.cadastraProduto(novoProduto)

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

  editarProduto(values:any){
    const produto = this.cadastroProdutoForm.getRawValue() as ProdutoModel;

    const fornecedor = this.fornecedores.filter(fornecedor => fornecedor.id == produto.fornecedor.id)[0]
    produto.fornecedor.razaoSocial = fornecedor.razaoSocial
    produto.precoVenda = produto.precoCompra+(produto.precoCompra * this.margem/100)
    produto.id = this.produto.id

    this.service.atualizaProduto(produto)

  }





  get nome(){return this.cadastroProdutoForm.get('nome')?.value}
  get estoque(){return this.cadastroProdutoForm.get('estoque')?.value}
  get preco(){return this.cadastroProdutoForm.get('precoCompra')?.value}
  get margem(){return this.cadastroProdutoForm.get('percentagemLucro')?.value}
  get fornecedor(){return this.cadastroProdutoForm.get('fornecedor')?.get('id')?.value}
}
