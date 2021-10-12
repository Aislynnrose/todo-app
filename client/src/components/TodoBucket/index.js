import React, { useState } from "react";
import TodoForm from "../TodosForm";

function TodoBucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    importance: "",
  });

  console.log(props.todo);

  const submitUpdate = (value) => {
    props.editTodoItem(edit.id, value);
    setEdit({ id: null, value: "", importance: "" });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.todo.map((item, i) => (
    <div
      className={
        item.isComplete
          ? `todo-row complete ${item.importance}`
          : `todo-row ${item.importance}`
      }
      key={i}
    >
      <div key={item.id} onClick={() => props.completeTodo(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        {console.log(item)}
        <p
          onClick={() =>
            setEdit({
              id: item.id,
              value: item.text,
              importance: item.importance,
            })
          }
        >
          {" "}
          ✏️
        </p>
        <p onClick={() => props.removeTodo(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default TodoBucket;
