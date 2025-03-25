
// Esta funcion desordena una lista array
export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        // Selecciona un índice aleatorio entre 0 e i
        const j = Math.floor(Math.random() * (i + 1));

        // Intercambia los elementos
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
};