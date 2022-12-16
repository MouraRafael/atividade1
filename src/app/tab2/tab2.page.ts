import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalDetalhesFornecedorComponent } from '../modals/modal-detalhes-fornecedor/modal-detalhes-fornecedor.component';
import { FornecedorModel } from '../models/fornecedor.model';
import { ProdutoModel } from '../models/produto.model';
import { EstoqueService } from '../services/estoque.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  fornecedores:FornecedorModel[] =[];

  constructor(
    private service:EstoqueService,
    private modalCtrl:ModalController
  ) {}
  public ionViewWillEnter(): void {
    this.listaFornecedores();
  }


    listaFornecedores(){
      this.service.listarFornecedores().subscribe({
        next:(result)=>{
          this.fornecedores = result
          console.log(this.fornecedores)
        },
        error:(err)=>{
          console.log(err)
        }
      })
    }


    async abreModal(id:string){
      const fornecedor:FornecedorModel = this.fornecedores.filter(fornecedor => fornecedor.id === id)[0]

      const modal = await this.modalCtrl.create({
        component: ModalDetalhesFornecedorComponent,
        componentProps:{
          'fornecedor':fornecedor
        }
      });
      modal.onWillDismiss().then(
        event=>{
          if(event.role === 'cancel'){
            this.listaFornecedores();
          }
        }
      )

      return await modal.present();
    }

}
