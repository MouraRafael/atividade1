import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FornecedorModel } from 'src/app/models/fornecedor.model';
import { EstoqueService } from 'src/app/services/estoque.service';
import { ModalCadastroFornecedorComponent } from '../modal-cadastro-fornecedor/modal-cadastro-fornecedor.component';

@Component({
  selector: 'app-modal-detalhes-fornecedor',
  templateUrl: './modal-detalhes-fornecedor.component.html',
  styleUrls: ['./modal-detalhes-fornecedor.component.scss'],
})
export class ModalDetalhesFornecedorComponent {
  @Input() fornecedor!:FornecedorModel;
  constructor(
    private modalCtrl:ModalController,
    private service:EstoqueService
  ) { }

  cancel(){
    return this.modalCtrl.dismiss(null, 'cancel');
  }


  deletaFornecedor(id:string){
    this.service.deletaFornecedor(id)
  }


  async editarFornecedor(id:string){
    const modal = await this.modalCtrl.create({
      component:ModalCadastroFornecedorComponent,
      componentProps:{
        'editable':true,
        'fornecedor':this.fornecedor
      }
    })

    this.cancel()
    return modal.present()
  }


}
