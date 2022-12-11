import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDetalhesFornecedorComponent } from './modal-detalhes-fornecedor.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CorreiosService } from 'src/app/services/correios.service';



@NgModule({
  declarations: [ModalDetalhesFornecedorComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[ModalDetalhesFornecedorComponent],
  providers:[CorreiosService]
})
export class ModalDetalhesFornecedorModule { }
