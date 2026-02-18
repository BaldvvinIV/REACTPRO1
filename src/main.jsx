import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'

const initialState = {
  todos: [],
  loading: false,
  users: [],
  loadingUsers: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'GET_TODOS':
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };

    case 'LOADING_USERS':
      return {
        ...state,
        loadingUsers: true,
      };

    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loadingUsers: false,
      };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };

    default:
      return state;
  }
};




const store = createStore(reducer , applyMiddleware(thunk))

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
