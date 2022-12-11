import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { EstoqueService } from '../services/estoque.service';
import { ModalDetalhesProdutoModule } from '../modals/modal-detalhes-produto/modal-detalhes-produto.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
    ModalDetalhesProdutoModule
  ],
  declarations: [Tab3Page],
  providers:[EstoqueService]
})
export class Tab3PageModule {}
