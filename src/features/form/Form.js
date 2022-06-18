import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createTodo } from '../list/listSlice';
import { editHeader, editDescription, addId } from './formSlice';

function Form() {

  const list = useSelector(state => state.list);
  const form = useSelector(state => state.form);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(addId(Date.now()))
  }, [list])

  const newTask = () => {
    dispatch(createTodo(form));
    dispatch(editHeader(''));
    dispatch(editDescription(''));
  };

  return (
    <div className="Form">
      <input value={form.header} type='text' onChange={(e) => dispatch(editHeader(e.target.value))} />
      <textarea value={form.description} type='text' onChange={(e) => dispatch(editDescription(e.target.value))} />
      <button onClick={newTask}>Create Task</button>
    </div>
  );
}

export default Form;