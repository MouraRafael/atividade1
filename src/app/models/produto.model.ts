import { FornecedorModel } from "./fornecedor.model";

export interface ProdutoModel{
  nome:string;
  estoque:number;
  precoCompra:number;
  precoVenda:number;
  fornecedor:FornecedorModel
}
