export const CREATE_NEW_DECK = 'CREATE_NEW_DECK'
  
export const createNewDeck = payload => {
  return {type: CREATE_NEW_DECK, payload}
}
