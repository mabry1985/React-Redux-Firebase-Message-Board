export const createMessage = (message) => {
    return (dispatch, getState) => {
     dispatch({ type: 'CREATE_MESSAGE', message})
    }
}
