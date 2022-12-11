import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';


import { Tab2PageRoutingModule } from './tab2-routing.module';
import { EstoqueService } from '../services/estoque.service';
import { ModalDetalhesFornecedorModule } from '../modals/modal-detalhes-fornecedor/modal-detalhes-fornecedor.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    ModalDetalhesFornecedorModule
  ],
  declarations: [Tab2Page],
  providers:[EstoqueService]
})
export class Tab2PageModule {}
