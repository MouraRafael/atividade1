import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProdutoModel } from 'src/app/models/produto.model';
import { EstoqueService } from 'src/app/services/estoque.service';
import { ModalCadastroProdutoComponent } from '../modal-cadastro-produto/modal-cadastro-produto.component';

@Component({
  selector: 'app-modal-detalhes-produto',
  templateUrl: './modal-detalhes-produto.component.html',
  styleUrls: ['./modal-detalhes-produto.component.scss'],
})
export class ModalDetalhesProdutoComponent implements OnInit {
  @Input() produto!:ProdutoModel;
  constructor(
    private modalCtrl:ModalController,
    private service:EstoqueService
  ) { }

  cancel(){
    return this.modalCtrl.dismiss(null, 'cancel')
  }

  deletarProduto(id:number){
    this.service.deletaProduto(id).subscribe({
      next:()=>{
        this.cancel();
      },
      error:(err)=>{
        console.error(err)
      }
    })
  }



  async editarProduto(id:number){
    const modal = await this.modalCtrl.create({
      component:ModalCadastroProdutoComponent,
      componentProps:{
        'editable': true,
        'produto': this.produto
      }
    })

    this.cancel();
    return modal.present();

  }

  ngOnInit() {}

}
