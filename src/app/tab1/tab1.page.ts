import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalCadastroFornecedorComponent } from '../modals/modal-cadastro-fornecedor/modal-cadastro-fornecedor.component';
import { ModalCadastroProdutoComponent } from '../modals/modal-cadastro-produto/modal-cadastro-produto.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(
    private modalCtrl:ModalController
  ) {}






  async abreModalCadastroFornecedor(){
    const modal = await this.modalCtrl.create({
      component:ModalCadastroFornecedorComponent
    })
    modal.present();
  }
  async abreModalCadastroProduto(){
    const modal = await this.modalCtrl.create({
      component:ModalCadastroProdutoComponent
    })
    modal.present();
  }
}
