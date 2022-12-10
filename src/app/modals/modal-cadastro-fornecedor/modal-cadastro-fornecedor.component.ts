import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FornecedorModel } from 'src/app/models/fornecedor.model';

@Component({
  selector: 'app-modal-cadastro-fornecedor',
  templateUrl: './modal-cadastro-fornecedor.component.html',
  styleUrls: ['./modal-cadastro-fornecedor.component.scss'],
})
export class ModalCadastroFornecedorComponent implements OnInit {
  cadastraFornecedorForm!:FormGroup;

  constructor(
    private modalCtrl:ModalController,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit() {
    this.cadastraFornecedorForm = this.formBuilder.group({
      razaoSocial:[''],
      cnpj:[''],
      contato:[''],
      endereco:this.formBuilder.group({
        cep:[''],
        uf:[''],
        localidade:[''],
        bairro:[''],
        logradouro:[''],
        numero:['']
      })
    })
  }

  cancel(){
    this.modalCtrl.dismiss(null,'cancel')
  }

  cadastraFornecedor(){
    const fornecedor = this.cadastraFornecedorForm.getRawValue() as FornecedorModel;
    console.log(fornecedor)
  }



  get razaoSocial() {return this.cadastraFornecedorForm.get('razaoSocial')!}
  get logradouro(){return this.cadastraFornecedorForm.get("endereco")?.get("logradouro")!}
  get numero(){return this.cadastraFornecedorForm.get("endereco")?.get("numero")!}






}
