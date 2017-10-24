export const CREATE_NEW_DECK = 'CREATE_NEW_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

export const createNewDeck = deck => {
  return {type: CREATE_NEW_DECK, deck}
}

export const addCardToDeck = card => {
  return {type: ADD_CARD_TO_DECK, card}
}