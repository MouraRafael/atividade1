import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FornecedorModel } from 'src/app/models/fornecedor.model';
import { EstoqueService } from 'src/app/services/estoque.service';

@Component({
  selector: 'app-modal-cadastro-fornecedor',
  templateUrl: './modal-cadastro-fornecedor.component.html',
  styleUrls: ['./modal-cadastro-fornecedor.component.scss'],
})
export class ModalCadastroFornecedorComponent implements OnInit {
  cadastraFornecedorForm!:FormGroup;

  constructor(
    private modalCtrl:ModalController,
    private formBuilder:FormBuilder,
    private service:EstoqueService
  ) { }

  ngOnInit() {
    this.cadastraFornecedorForm = this.formBuilder.group({
      razaoSocial:['',[Validators.required,Validators.minLength(5),Validators.maxLength(100)]],
      cnpj:['',[Validators.required,Validators.pattern(/\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}/)]],
      contato:['',[Validators.required,Validators.pattern(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/)]],
      endereco:this.formBuilder.group({
        cep:['',[Validators.required,Validators.pattern(/\d{5}-?\d{3}/)]],
        uf:['',[Validators.required,Validators.minLength(2),Validators.maxLength(2)]],
        localidade:['',[Validators.required,Validators.minLength(3)]],
        bairro:['',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]],
        logradouro:['',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]],
        numero:['',[Validators.required,Validators.pattern(/^[0-9]+/)]]
      })
    })
  }

  cancel(){
    this.modalCtrl.dismiss(null,'cancel')
  }

  cadastraFornecedor(){
    const fornecedor = this.cadastraFornecedorForm.getRawValue() as FornecedorModel;
    this.service.cadastraFornecedor(fornecedor).subscribe({
      next:()=>this.cancel()
    });
  }



  get razaoSocial() {return this.cadastraFornecedorForm.get('razaoSocial')!}
  get logradouro(){return this.cadastraFornecedorForm.get("endereco")?.get("logradouro")!}
  get numero(){return this.cadastraFornecedorForm.get("endereco")?.get("numero")!}






}
