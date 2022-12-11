import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FornecedorModel } from 'src/app/models/fornecedor.model';
import { EstoqueService } from 'src/app/services/estoque.service';

@Component({
  selector: 'app-modal-detalhes-fornecedor',
  templateUrl: './modal-detalhes-fornecedor.component.html',
  styleUrls: ['./modal-detalhes-fornecedor.component.scss'],
})
export class ModalDetalhesFornecedorComponent {
  @Input() fornecedor!:FornecedorModel;
  constructor(
    private modalCtrl:ModalController,
    private router:Router,
    private service:EstoqueService
  ) { }

  cancel(){
    return this.modalCtrl.dismiss(null, 'cancel');
  }


}
