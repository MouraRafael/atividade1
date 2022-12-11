import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDetalhesProdutoComponent } from './modal-detalhes-produto.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ModalDetalhesProdutoComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[ModalDetalhesProdutoComponent]
})
export class ModalDetalhesProdutoModule { }
