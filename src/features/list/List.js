import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, fetchList } from './listSlice';

function List() {

  const dispatch = useDispatch();
  const list = useSelector(state => state.list);

  const getLocalStorageData = () => {
    const localData = localStorage.getItem('todolist');
    if (localData) {
      const parsedData = JSON.parse(localData);
      dispatch(fetchList(parsedData));
    }
  };

  const setLocalStorageData = () => {
    localStorage.setItem('todolist', JSON.stringify(list));
  };

  useEffect(() => {
    getLocalStorageData();
  }, []);

  useEffect(() => {
    setLocalStorageData();
  }, [list])


  return (
    <div className="List">
      {list.map((task, index) => {
        return (<div className="listContainer" key={task.id + index}
          style={task.done ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}>
          <h1>{task.header}</h1>
          <h2>{task.description}</h2>
          <p>ADDED ON: {new Date(task.id).toString()}</p>
          <span>
            <button onClick={() => dispatch(deleteTodo(task))}>DELETE</button>
            <input type='checkbox' onChange={() => dispatch(toggleTodo(task))}/>
          </span>
        </div>)
      })}
    </div>
  );
}

export default List;