
/**
 *Esta funcion toma la carta que se solicira en la funcion pedirCarta   
 * @param {string} carta 
 * @returns {number}retorna el valor de la carta en la baraja
 */
// pedirCarta();
export const valorCarta = ( carta, puntosDeJugadores ) => {
      
    let valor = [];
    valor = carta.substring(0, carta.length - 1);
    puntosDeJugadores = puntosDeJugadores + valor;
    console.log({valor});
    console.log({puntosDeJugadores});
    return( isNaN( valor ) ) ? 
            ( valor === 'A') ? 11 : 10  
            : valor * 1
   
}

