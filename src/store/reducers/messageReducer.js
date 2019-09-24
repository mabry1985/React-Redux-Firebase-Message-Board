const initialState = {
    messages: [
      {id: '1', title: 'I can\'t even', content: `Did you hear what they said?`},
      { id: '2', title: 'How many times?', content: `Will this ever end?` },
      { id: '3', title: 'It\'s really crazy,but...', content: 'Everytime I sneeze, I fart...' }

      
    ]
}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_MESSAGE': 
      console.log('created message', action.message);
      return state;
    default: 
      return state;
    }
}

export default messageReducer