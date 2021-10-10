import React, { useState } from 'react';


function TodoForm(props) {
  const [input, setInput] = useState('');
  

  let [importance, setImportance] = useState('');
  const importanceLevel = ['high', 'medium', 'low']
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!importance) {
      importance = 'low';
    }

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
      importance: importance,
    });

    setInput('');
    setImportance('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return !props.edit ? (
    <div>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your todo list"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${importance}`}>
            {importance || 'Priority'}
          </button>
          <div className="dropdown-content">
            <p onClick={()=>setImportance(importanceLevel[0])}>High Priority</p>
            <p onClick={()=>setImportance(importanceLevel[1])}>Medium Priority</p>
            <p onClick={()=>setImportance(importanceLevel[2])}>Low Priority</p>
          </div>
        </div>
        <button className="bucket-button">Add todo list item</button>
      </form>
    
    </div>
  ) : (
    <div>
      <h3>Update todo item: {props.edit.value}</h3>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${importance}`}>
            {importance || 'Priority'}
          </button>
          <div className="dropdown-content">
            <p onClick={()=>setImportance(importanceLevel[0])}>High Priority</p>
            <p onClick={()=>setImportance(importanceLevel[1])}>Medium Priority</p>
            <p onClick={()=>setImportance(importanceLevel[2])}>Low Priority</p>
          </div>
        </div>
        <button className="bucket-button">Update</button>
      </form>
    </div>
  );
}

export default TodoForm;