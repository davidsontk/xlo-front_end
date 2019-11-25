import { Marca } from './marca';

export class Veiculo {
    id: number;
    descricao: string;
    marca: Marca = new Marca();
    ano: number;
    preco: number;
    kmRodado: number;
    imagem: string;
    adicionais: [];
    tipo: string;
}