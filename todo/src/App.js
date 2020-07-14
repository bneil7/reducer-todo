import React, { useReducer, useState } from 'react';
import { initialState, reducer } from './reducers/Reducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './App.css';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const [newTask, changeTask] = useState('');

  const handleChange = e => {
    changeTask(e.target.value);
  }

  const completeTask = (id) => {
    dispatch({ type: 'COMPLETE_TASK', payload: id })
  }

  const filterComplete = () => {
    dispatch({ type: 'FILTER' })
  }

  return (
    <div className="App">
      <h1> Reducer - ToDo </h1>
      <TodoList 
        list={state} 
        completeTask={completeTask} 
      />
      <br/>
      <button onClick={filterComplete}>CLEAR COMPLETED TODOS</button>
      <br/>
      <br/>
      <TodoForm
        input={newTask}
        handleChange={handleChange}
        dispatch={dispatch}
        changeTask={changeTask}
      />
      
    </div>
  );
}

export default App;
