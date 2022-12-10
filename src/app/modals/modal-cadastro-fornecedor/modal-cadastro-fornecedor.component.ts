import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

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
        logradouro:[''],
        numero:[''],
        bairro:[''],
        cidade:[''],
        cep:['']
      })
    })
  }

  cancel(){
    this.modalCtrl.dismiss(null,'cancel')
  }





  get razaoSocial() {return this.cadastraFornecedorForm.get('razaoSocial')!}
  get logradouro() {return this.cadastraFornecedorForm.get('endereco')?.get('logradouro')!}
}
