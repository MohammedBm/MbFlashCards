export const getDecks = data => {
  return Object.values(data).map(deck => ({ ...deck, key: deck.title }))
}

export const getDeckIds = data => {
  return Object.values(data).map(deck => deck.title)
}

export const getDeck = (data, id) => {
  return data[id]
}