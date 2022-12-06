import { EnderecoModel } from "./endereco.model";

export interface FornecedorModel{
  razaoSocial:string;
  cnpj:string;
  endereço:EnderecoModel
  contato:string
}
