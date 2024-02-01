import { createStore, combineReducers } from "redux";

const gameReducer = (state = { coins: 21, isPlayerTurn: true }, action) => {
  switch (action.type) {
    case "UPDATE_GAME_STATE":
      return { ...state, ...action.payload };
    case "RESET_GAME_STATE":
      return { coins: 21, isPlayerTurn: true };
    default:
      return state;
  }
};
const historyReducer = (state = [], action) => {
  switch (action.type) {
    case "RECORD_GAME_RESULT":
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  game: gameReducer,
  history: historyReducer,
});

const store = createStore(rootReducer);

export default store;
