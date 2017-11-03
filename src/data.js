const data = {
  decks: {
    React: {
      title: 'React',
      questions: [{
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [{
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }]
    }
  }
}

export default data

export const getDecks = () => {
  return Object.values(data.decks).map((deck, key) => ({...deck, key}))
}

export const getDeck = id => {
  return data.decks[id]
}
