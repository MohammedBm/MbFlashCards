const data = {
  decks: {
    React: {
      title: 'React',
      questions: [
        {
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
      questions: [
        {
          question: 'What is a closure?',
          answer:
            'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    },
    Ruby: {
      title: 'Ruby',
      questions: [
        {
          question: 'What is a class?',
          answer:
            'classes hold data, have methods that interact with that data, and are used to instantiate objects.'
        },
        {
          question: 'What is an object?',
          answer:
            'an Object hold data, have methods that interact with that data, and are used to instantiate objects.'

        }
      ]
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
