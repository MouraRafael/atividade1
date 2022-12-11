import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalDetalhesProdutoComponent } from '../modals/modal-detalhes-produto/modal-detalhes-produto.component';
import { ProdutoModel } from '../models/produto.model';
import { EstoqueService } from '../services/estoque.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  produtos:ProdutoModel[] = [];

  constructor(
    private service:EstoqueService,
    private modalCtrl:ModalController
  ) {}

  public ionViewWillEnter(): void {
    this.listarProdutos();
  }
  listarProdutos(){
    this.service.listarProdutos().subscribe({
      next:(result)=>{
        this.produtos = result
      },
      error:(err)=>{console.error(err)}
    })
  }

  async abreModal(id:number){
    const produto:ProdutoModel = this.produtos.filter(produto => produto.id === id)[0]
    const modal = await this.modalCtrl.create({
      component:ModalDetalhesProdutoComponent,
      componentProps:{
        'produto': produto
      }
    })
    modal.onWillDismiss().then(
      event=>{
        if(event.role == 'cancel'){
          this.listarProdutos()
        }
      }
    )

      return await modal.present()
  }



}
