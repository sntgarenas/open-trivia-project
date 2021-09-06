
const types = {
    register: 'register',
    startGame: 'start-game'
}

const initialState = {
    player: 'No hay jugador',
    category: 0,
    level: '',
    questions: []
}

const gameReducer = (state, action) => {
    switch (action.type) {
        case types.register:
            console.log("entro en accion");
            console.log(action.payload);
            return {
                ...state,
                player: action.payload.player === '' ? state.player : action.payload.player,
                category: action.payload.category === 0 ? state.category : action.payload.category,
                level: action.payload.level === '' ? state.level : action.payload.level
            }
        case types.startGame:
            console.log(action.payload);
            return {
                ...state,
                questions: action.payload
            }
        default:
            return state;

    }
};

export { types, initialState}
export default gameReducer;