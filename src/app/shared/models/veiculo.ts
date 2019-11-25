import { Usuario } from 'src/app/shared/models/usuario';
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
    idUsuario: Usuario = new Usuario();
}