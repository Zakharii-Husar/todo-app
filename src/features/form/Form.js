import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createTodo } from '../list/listSlice';
import { editHeader, editDescription, addId } from './formSlice';

function Form() {

  const list = useSelector(state => state.list);
  const form = useSelector(state => state.form);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addId(Date.now()))
  }, [list])

  const newTask = () => {
    if (!form.header) return;
    dispatch(createTodo(form));
    dispatch(editHeader(''));
    dispatch(editDescription(''));
  };

  return (
    <div className="Form">
      <span>
        <label htmlFor='header'>Task name:</label>
        <input id='header' value={form.header} type='text' onChange={(e) => dispatch(editHeader(e.target.value))} />
        <label htmlFor='description'>Description:</label>
        <textarea id='description' value={form.description} type='text' onChange={(e) => dispatch(editDescription(e.target.value))} />
      </span>
      <button onClick={newTask}>ADD NEW TASK</button>
    </div>
  );
}

export default Form;