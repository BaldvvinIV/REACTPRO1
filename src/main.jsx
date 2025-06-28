import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'

const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_TODOS':
        return action.payload

      default :
        return state
    }
}



const store = createStore(reducer , applyMiddleware(thunk))

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
