import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FornecedorModel } from 'src/app/models/fornecedor.model';
import { EstoqueService } from 'src/app/services/estoque.service';

@Component({
  selector: 'app-modal-cadastro-produto',
  templateUrl: './modal-cadastro-produto.component.html',
  styleUrls: ['./modal-cadastro-produto.component.scss'],
})
export class ModalCadastroProdutoComponent implements OnInit {
  cadastroProdutoForm!:FormGroup;
  fornecedores:FornecedorModel[] =[];


  constructor(
    private modalCtrl:ModalController,
    private formBuilder:FormBuilder,
    private service:EstoqueService
  ) { }

  ngOnInit() {
    this.service.getFornecedor().subscribe({
      next:(fornecedores)=>{
        fornecedores.forEach((f)=>{
          this.fornecedores.push(f)
        })
      },
      error:(err)=>{
        console.error(err)
      }
    })
  }

  cancel(){
    this.modalCtrl.dismiss(null,'cancel')
  }


}
