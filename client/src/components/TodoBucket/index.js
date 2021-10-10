import React, { useState } from 'react';
import TodoForm from '../TodosForm';

function TodoBucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    importance: '',
  });

  console.log(props.todo);

  const submitUpdate = (value) => {
    
    props.editBucketItem(edit.id, value);
    setEdit({ id: null, value: '', importance: '' });
    };

  if (edit.id) {
    // return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.todo.map((item, i) => (

    
    <div
      className={
        item.isComplete
          ? `bucket-row complete ${item.importance}`
          : `bucket-row ${item.importance}`
      }
      key={i}>
      <div key={item.id} onClick={() => props.completeBucketItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
      {console.log(item)}
        <p onClick={() => setEdit({ id: item.id, value: item.text, importance: item.importance })}> ✏️</p>
        <p onClick={() => props.removeBucketItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default TodoBucket;