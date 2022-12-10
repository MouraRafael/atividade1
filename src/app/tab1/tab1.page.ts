import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalCadastroFornecedorComponent } from '../modals/modal-cadastro-fornecedor/modal-cadastro-fornecedor.component';
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
    private service:EstoqueService,
    private modalCtrl:ModalController
  ) {}



  async getFornecedor(){
    await this.service.getFornecedor().subscribe({
      next:(result)=>{
        this.fornecedor = result;

        console.log(this.fornecedor[0].endereço)
      }
    })
  }


  async abreModalCadastro(){
    const modal = await this.modalCtrl.create({
      component:ModalCadastroFornecedorComponent
    })
    modal.present();
  }
}
