
const types = {
    register: 'register',
    startGame: 'start-game',
    correctAnswer: 'correct-answer',
    resetGameData: 'reset-game-data'
}

const initialState = {
    player: 'No hay jugador',
    category: 0,
    level: '',
    questions: [],
    rewards: 0,
    questionNumber: 0
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
                rewards: state.rewards + action.payload,
                questionNumber: state.questionNumber + 1
            }
        case types.resetGameData:
            return {
                player: 'No hay jugador',
                category: 0,
                level: '',
                questions: [],
                rewards: 0
            }
        default:
            return state;
    }
};

export { types, initialState}
export default gameReducer;