import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCadastroProdutoComponent } from './modal-cadastro-produto.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstoqueService } from 'src/app/services/estoque.service';



@NgModule({
  declarations: [ModalCadastroProdutoComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[ModalCadastroProdutoComponent],
  providers:[EstoqueService]
})
export class ModalCadastroProdutoModule { }
