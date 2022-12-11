import { EnderecoModel } from "./endereco.model";

export interface FornecedorModel{
  id:number;
  razaoSocial:string;
  cnpj:string;
  endereco:EnderecoModel
  contato:string
}
