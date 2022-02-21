import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createTodoAction } from '../list/listSlice';
import { editHeaderAction, editDescriptionAction, addIdAction } from './formSlice';

function Form() {

  const list = useSelector(state => state.list);
  const form = useSelector(state => state.form);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(addIdAction(Date.now()))
  }, [list])

  const newTask = () => {
    dispatch(createTodoAction(form));
    dispatch(editHeaderAction(''));
    dispatch(editDescriptionAction(''));
  };

  return (
    <div className="Form">
      <input value={form.header} type='text' onChange={(e) => dispatch(editHeaderAction(e.target.value))} />
      <textarea value={form.description} type='text' onChange={(e) => dispatch(editDescriptionAction(e.target.value))} />
      <button onClick={newTask}>Create Task</button>
    </div>
  );
}

export default Form;