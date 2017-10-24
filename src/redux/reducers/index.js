import { combineReducers } from 'redux'
import initialState from '../initialState'
import { CREATE_NEW_DECK } from '../actions'

function decks(state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_DECK:
      return createNewDeck(state, action)
    default:
      return state
  }
}

export default combineReducers({ decks })

const createNewDeck = (state, action) => {
  const { name } = action.payload
  return {
    ...state,
    [name]: {
      title: name,
      questions: []
    }
  }
}