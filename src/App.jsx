import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getTodos } from './action.js';
import { deleteTodo } from './action.js';
import { updatechange } from './action.js';

const App = () => {
  const todos = useSelector((state) => state.todos);
  const loading = useSelector((state) => state.loading);

  const handleDeleteTodo = (id, dispatch) => {
    dispatch(deleteTodo(id ));
  };
  const handlechange = (id, completed) => {
    Dispatch(updatechange(id, completed));
  }
    
  const Dispatch = useDispatch();
    useEffect(() => {

        Dispatch(getTodos());
    } , [])
  return (
    <> 
    <h1 style={{ textAlign: 'center' , color: 'blue' , fontSize: '30px' , fontFamily : 'Arial'}}>Список дел </h1>
      {
        loading ? (
          <div className='loaderBox'>
            <span className="loader"></span>
          </div>
        ) : (
          todos.map((item) => {
            return (
              <div className='Todos'>
              <input type="checkbox" className='Checkbox' checked={item.completed} onChange={() => handlechange(item.id, item.completed)} />
              <p>{item.title}</p>
              <input className='Button' type="button" value={'Удалить'} onClick={() => handleDeleteTodo(item.id, Dispatch)} />
            </div>
          )
        })
        )
      }
    </>
  )
};

export default App;