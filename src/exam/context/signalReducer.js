
export const signalReducer = (state, action) => {
    switch (action.type) {
        case 'setSelect':
            return state.map((signal)=>{
                if(signal.id === action.payload.idSignal){
                    const updateRespuestas = signal.respuestas.map((res) => {
                        if(res.id === action.payload.idRes){
                            return {...res, isSelected: !res.isSelected}
                        }
                        return {...res, isSelected: false}
                    })
                    return {...signal, respuestas: updateRespuestas}
                }
                return signal;
            })
    
        default:
            return state;
    }
}
