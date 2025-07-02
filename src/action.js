export const getTodos = () => {
    return (dispatch) => {
        dispatch({type : 'LOADING'});
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => {
                dispatch({ type: 'GET_TODOS', payload: json });
            });
    };
};