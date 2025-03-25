import { getListRandom } from './random.js'; // Ruta relativa
import { getListRandomWithInit } from './random.js';
import { signals } from '../data/signals.js'; // Ruta relativa
import { shuffleArray } from './shuffleArray.js';

export const getSignalsList = (cantidadSenales, data) => {
    const listRandom = getListRandom(cantidadSenales, data);

    const result = listRandom.map(id => {
        const signalObjet = signals.find(signal => signal.id === id)

        const threeData = shuffleArray(getListRandomWithInit(3,50,id));
        const listRespuesta = threeData.map(id => {
            return signals.find(signal => signal.id === id).nombre
        });

        return {...signalObjet,
            respuestas: [
                {   
                    id:1,
                    res:listRespuesta[0], 
                    isSelected:false
                },
                {   
                    id:2,
                    res:listRespuesta[1], 
                    isSelected:false
                },                {   
                    id:3,
                    res:listRespuesta[2], 
                    isSelected:false
                }
            ]
        }
    });
    return result;
};

// Retorna una lista de objetos de largo cantidadSenales y requiere la cantidad data para generar la lista
// Ejemplo
// getSignalsList = (2, 50)
// retorno
// [
//     {
//       id: 29,
//       nombre: 'Ancho maximo',
//       image: 'image/ancho-maximo.svg',
//       categoria: 'Reglamentarias',
//       respuestas: [
//         {
//           id: 1,
//           res: 'Peso maximo por eje',
//           isSelected: false
//         },
//         {
//           id: 2,
//           res: 'Ancho maximo',
//           isSelected: false
//         },
//         {
//           id: 3,
//           res: 'Ceda el paso',
//           isSelected: false
//         }
//       ]
//     },
//     {
//       id: 46,
//       nombre: 'Silencio',
//       image: 'image/silencio.svg',
//       categoria: 'Reglamentarias',
//       respuestas: [
//         {
//           id: 1,
//           res: 'Transito en un sentido',
//           isSelected: false
//         },
//         {
//           id: 2,
//           res: 'Solo bicicletas',
//           isSelected: false
//         },
//         {
//           id: 3,
//           res: 'Silencio',
//           isSelected: false
//         }
//       ]
//     }
// ]