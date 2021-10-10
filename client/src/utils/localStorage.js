export const getSavedTodosIds = () => {
  const savedTodosIds = localStorage.getItem('saved_todos')
    ? JSON.parse(localStorage.getItem('saved_todos'))
    : [];

  return savedTodosIds;
};

export const saveTodoIds = (todoIdArr) => {
  if (todoIdArr.length) {
    localStorage.setItem('saved_todos', JSON.stringify(todoIdArr));
  } else {
    localStorage.removeItem('saved_todos');
  }
};

export const removeTodoId = (todoId) => {
  const savedTodosIds = localStorage.getItem('saved_todos')
    ? JSON.parse(localStorage.getItem('saved_todos'))
    : null;

  if (!savedTodosIds) {
    return false;
  }

  const updatedSavedTodosIds = savedTodosIds?.filter((savedTodoId) => savedTodoId !== todoId);
  localStorage.setItem('saved_todos', JSON.stringify(updatedSavedTodosIds));

  return true;
};
