export const CREATE_NEW_DECK = 'CREATE_NEW_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const DELETE_ALL_DECKS = 'DELETE_ALL_DECKS'
export const RESTORE_DEFAULT_DECKS = 'RESTORE_DEFAULT_DECKS'

export const createNewDeck = deck => {
  return {type: CREATE_NEW_DECK, deck}
}

export const addCardToDeck = card => {
  return {type: ADD_CARD_TO_DECK, card}
}

export const deleteAllDecks = () => {
  return { type: DELETE_ALL_DECKS }
}

export const restoreDefaultDecks = () => {
  return { type: RESTORE_DEFAULT_DECKS }
}
