import React, { useState, useEffect } from "react";
import TodoForm from '../TodosForm';
import TodoBucket from '../TodoBucket';
import { saveTodoIds, getSavedTodosIds  } from "../../utils/localStorage"

function TodoList() {
  const [todo, setTodo] = useState([]);
  const [savedTodoIds, setSavedTodoIds] = useState(getSavedTodosIds())

  useEffect(()=>{
    return ()=>saveTodoIds(savedTodoIds)
  });

  const addTodo = (item) => {
    console.log(item);
    if (!item.text) {
      return;
    }
    const newBucket = [item, ...todo];
    console.log(newBucket);
    setSavedTodoIds(newBucket);

    setTodo(newBucket);    
  };

  // Function to mark bucket list item as complete
  const completeTodo = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updateTodo = todo.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    console.log(updateTodo);
    setTodo(updateTodo);
  };
  const removeTodo = (id) => {
    const updateTodo = [...todo].filter((item) => item.id !== id);
    setTodo(updateTodo);
  };

  const editTodoItem = (itemId, newValue) => {
    if (!newValue.text) {
      return;
    }
      setTodo((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>Check out your todo list</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoBucket
        todo={todo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        editTodoItem={editTodoItem}
      />
    </div>
  );
}

export default TodoList;
