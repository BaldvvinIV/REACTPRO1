import { use, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getTodos } from './action.js';
import { deleteTodo } from './action.js';
import { updatechange } from './action.js';
import { loadUsers } from './action.js';
const App = () => {
  const todos = useSelector((state) => state.todos);
  const loading = useSelector((state) => state.loading);
  const users = useSelector((state) => state.users);
  const loadingUsers = useSelector((state) => state.loadingUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
    dispatch(loadUsers());
  }, [dispatch]);

  const handleDeleteTodo = (id) => dispatch(deleteTodo(id));
  const handlechange = (id, completed) => dispatch(updatechange(id, completed));

  return (
    <>
      <h1 style={{ textAlign: 'center', color: 'blue', fontSize: 30, fontFamily: 'Arial' }}>
        Список дел
      </h1>

      {loading ? (
        <div className="loaderBox">
          <span className="loader"></span>
        </div>
      ) : (
        todos.map((item) => {
          const email = users.find((u) => u.id === item.userId)?.email;

          return (
            <div className="Todos" key={item.id}>
              <input
                type="checkbox"
                className="Checkbox"
                checked={item.completed}
                onChange={() => handlechange(item.id, item.completed)}
              />
              <p className="Text">{item.title}</p>

              <p>UserEmail: {loadingUsers ? 'loading...' : (email ?? '—')}</p>

              <input
                className="Button"
                type="button"
                value="Удалить"
                onClick={() => handleDeleteTodo(item.id)}
              />
            </div>
          );
        })
      )}
    </>
  );
};


export default App;