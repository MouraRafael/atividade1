import { FornecedorModel } from "./fornecedor.model";

export class ProdutoModel{
  id!:string;
  nome!:string;
  estoque!:number;
  precoCompra!:number;
  precoVenda!:number;
  fornecedor!:FornecedorModel
  percentagemLucro!:number
}
