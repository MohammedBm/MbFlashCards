export const getDecks = data => {
  return Object.values(data).map(deck => ({ ...deck, key: deck.title }))
}

export const getDeck = (data, id) => {
  return data[id]
}