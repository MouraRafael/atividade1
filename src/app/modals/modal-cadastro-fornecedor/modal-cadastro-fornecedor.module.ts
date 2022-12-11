import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCadastroFornecedorComponent } from './modal-cadastro-fornecedor.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstoqueService } from 'src/app/services/estoque.service';
import { CorreiosService } from 'src/app/services/correios.service';



@NgModule({
  declarations: [ModalCadastroFornecedorComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[ModalCadastroFornecedorComponent],
  providers:[EstoqueService,CorreiosService]
})
export class ModalCadastroFornecedorModule { }
