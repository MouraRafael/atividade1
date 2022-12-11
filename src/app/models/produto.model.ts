import { FornecedorModel } from "./fornecedor.model";

export interface ProdutoModel{
  id:number;
  nome:string;
  estoque:number;
  precoCompra:number;
  precoVenda:number;
  fornecedor:FornecedorModel
}
