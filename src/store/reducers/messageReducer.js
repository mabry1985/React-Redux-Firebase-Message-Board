const initialState = {
    messages: [
    ]
}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_MESSAGE': 
      console.log('created message', action.message);
      return state;
    case 'CREATE_MESSAGE_ERROR':
      console.log('create message error', action.err)
      return state;
    default: 
      return state;
    }
}

export default messageReducer