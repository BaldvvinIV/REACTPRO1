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


export const updatechange = (id, completed) => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        completed: !completed,
      }),
    })  .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'UPDATE_TODO', payload: data });
      })
      .catch((err) => console.error(err));
  };
};

export const loadUsers = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USERS' });

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'GET_USERS',
          payload: data,
        });
      });
  };
};
