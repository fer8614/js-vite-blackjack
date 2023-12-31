
import { forEach } from "underscore";
import { pedirCarta, valorCarta, imagenCarta } from "./index";

/**
 * 
 * @param {number} puntosMinimos puntos minimos que la computadora
 * @param {HTMLElement} puntosHTML elementos HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elementos HTML para mostrar las cartas
 * @param {Array<string>} deck
 */


export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {
    
    if (!puntosMinimos) throw new Error('Puntos minimos son necessarios');
    if (!puntosHTML) throw new Error('Argumentos puntosHTML es necesario');
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta, puntosComputadora ); 
        console.log({puntosComputadora});

        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = imagenCarta( carta );
        divCartasComputadora.append( imgCarta );
        
        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

