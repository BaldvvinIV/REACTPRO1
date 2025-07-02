import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getTodos } from './action.js';

const App = () => {
  const todos = useSelector((state) => state.todos);
  const loading = useSelector((state) => state.loading);
  const Dispatch = useDispatch();
    useEffect(() => {

        Dispatch(getTodos());
    } , [])
  return (
    <> 
      {
        loading ? (
          <p style={{ textAlign: 'center' , color: 'blue' , fontSize: '20px' , fontFamily : 'Arial'}}>Loading...</p>
        ) : (
          todos.map((item) => {
            return (
              <div key={item.id}>
                <table style={{ border: '1px solid black'  , padding: '10px' , margin: 'auto', width: '50%'}}>
                  <tr>
                    <td style={{width: '10%'}}>{item.id}</td>
                  <td style={{width: '10%'}}>{item.userId}</td>
                  <td style={{width: '70%'}}>{item.title}</td>
                  <td style={{width: '10%'}}>{item.completed}</td>
                </tr>
              </table>
            </div>
          )
        })
        )
      }
    </>
  )
};

export default App;