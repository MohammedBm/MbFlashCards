import { combineReducers } from 'redux'
import initialState from '../initialState'
import { CREATE_NEW_DECK, ADD_CARD_TO_DECK, DELETE_ALL_DECKS, RESTORE_DEFAULT_DECKS } from '../actions'

export function decks(state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_DECK:
      return createNewDeck(state, action)
    case ADD_CARD_TO_DECK:
      return addCardToDeck(state, action)
    case DELETE_ALL_DECKS:
      return deleteAllDecks(state, action)
    case RESTORE_DEFAULT_DECKS:
      return restoreDefaultDecks(state, action)
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

const deleteAllDecks = (state, action) => {
  return {}
}

const restoreDefaultDecks = (state, action) => {
  return {...state, ...initialState}
}