import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';


import { Tab1PageRoutingModule } from './tab1-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EstoqueService } from '../services/estoque.service';
import { ModalCadastroFornecedorModule } from '../modals/modal-cadastro-fornecedor/modal-cadastro-fornecedor.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Tab1PageRoutingModule,
    HttpClientModule,
    ModalCadastroFornecedorModule
  ],
  declarations: [Tab1Page],
  providers:[EstoqueService]
})
export class Tab1PageModule {}
