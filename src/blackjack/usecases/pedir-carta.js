/**
 * De la creacion del nuevo deck se toma una carta al azar
 * @param {Array<String>} nuevoDeck es una rreglo de String
 * @returns {String}Retorna una carta del nuevoDeck 
 */

// Esta función me permite tomar una carta
export const pedirCarta = ( nuevoDeck  ) => {
     

    if ( nuevoDeck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = nuevoDeck.pop();
    return carta;
}

