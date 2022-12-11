import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDetalhesFornecedorComponent } from './modal-detalhes-fornecedor.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ModalDetalhesFornecedorComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[ModalDetalhesFornecedorComponent]
})
export class ModalDetalhesFornecedorModule { }
