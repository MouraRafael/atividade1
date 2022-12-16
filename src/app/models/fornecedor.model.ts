import { EnderecoModel } from "./endereco.model";

export class FornecedorModel{
  id!:string;
  razaoSocial!:string;
  cnpj!:string;
  endereco!:EnderecoModel
  contato!:string
}
