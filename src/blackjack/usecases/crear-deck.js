// Esta función crea un nuevo deck
import _ from 'underscore'

/**
 * Esta funcion crea un nuevo deck 
 * @param {Array<string>} tiposDeCarta 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array<string>} Retorna un nuevo deck de cartas 
 */
export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {
    
    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error ('TiposDeCarta es obligatorio como un arreglo de strings');
    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error ('TiposEspeciales es obligatorio como un arreglo de strings');
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

