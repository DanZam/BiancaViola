import {injectable, /* inject, */ BindingScope} from '@loopback/core';

const generator = require('generate-password');
const cryptoJs = require('crypto-js');

@injectable({scope: BindingScope.TRANSIENT})
export class FuncionesGeneralesService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */

  crearClaveAleatoria(): string{
   
    let claveAleatoria = generator.generate(
      {
        length: 15,
        numbers: true,
        lowercase: true,
        uppercase: true,
        symbols: true
      }
    )
   
    return claveAleatoria;
  }

  cifrarTexto (texto: string): string{
    let claveCifrada = cryptoJs.MD5(texto).toString();

    return claveCifrada
  }
}
