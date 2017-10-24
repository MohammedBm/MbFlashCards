import { combineReducers } from 'redux'
import initialState from '../initialState'
import { CREATE_NEW_DECK, ADD_CARD_TO_DECK } from '../actions'

function decks(state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_DECK:
      return createNewDeck(state, action)
    case ADD_CARD_TO_DECK:
      return addCardToDeck(state, action)
    default:
      return state
  }
}

export default combineReducers({ decks })

const createNewDeck = (state, action) => {
  const { name } = action.deck
  return {
    ...state,
    [name]: {
      title: name,
      questions: []
    }
  }
}

const addCardToDeck = ( state, action) => {
  const { card, deckName } = action.card

  const updateDeck = {...state[deckName]}
  updateDeck.questions.push(card)

  return {
    ...state,
    [deckName]: updateDeck
  }
}