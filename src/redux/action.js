export const updateGameState = payload => ({
  type: "UPDATE_GAME_STATE",
  payload,
});
export const recordGameResult = result => ({
  type: "RECORD_GAME_RESULT",
  payload: result,
});

export const resetGameState = () => ({
  type: "RESET_GAME_STATE",
});