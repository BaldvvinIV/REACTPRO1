export const getTodos = () => {
    return(dispatch) => {
        dispatch({
            type : 'LOADING'})
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type : 'GET_TODOS',
                payload : data
            })
        })
    }
}
export const deleteTodo = (id) => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'DELETE_TODO', payload: id });
      })
      .catch((err) => console.error(err));
  };
};
