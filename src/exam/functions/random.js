// Retorna una lista de numeros de largo max y la data tiene un largo de data
export const getListRandom = (max, data) => {
    const randomList = new Set();

    while(randomList.size < max){
        const randomNumber = Math.floor((Math.random() * data) + 1);
        
        randomList.add(randomNumber);
    }

    return Array.from(randomList);
}

// Retorna una lista de numeros de largo max, la data tiene un largo de data, iniciandola con un numero init
export const getListRandomWithInit = (max, data, init) => {
    const randomList = new Set();
    randomList.add(init);

    while(randomList.size < max){
        const randomNumber = Math.floor((Math.random() * data) + 1);
        
        randomList.add(randomNumber);
    }

    return Array.from(randomList);
}
