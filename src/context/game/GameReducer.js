
const types = {
    register: 'register',
    startGame: 'start-game',
    correctAnswer: 'correct-answer'
}

const initialState = {
    player: 'No hay jugador',
    category: 0,
    level: '',
    questions: [],
    correctAnswerCounter: 0
}

const gameReducer = (state, action) => {
    switch (action.type) {
        case types.register:
            return {
                ...state,
                player: action.payload.player === '' ? state.player : action.payload.player,
                category: action.payload.category === 0 ? state.category : action.payload.category,
                level: action.payload.level === '' ? state.level : action.payload.level
            }
        case types.startGame:
            return {
                ...state,
                questions: action.payload
            }
        case types.correctAnswer:
            return {
                ...state,
                correctAnswerCounter: action.payload
            }
        default:
            return state;
    }
};

export { types, initialState}
export default gameReducer;