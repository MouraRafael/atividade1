import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ModalCadastroFornecedorComponent } from './modal-cadastro-fornecedor.component';
import { EstoqueService } from 'src/app/services/estoque.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
