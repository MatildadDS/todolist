import React, { useState } from 'react';
import './App.css';
import '../node_modules/bulma/css/bulma.min.css';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';

function App() {

  const[myState, setMyState] = useState([
    {task: 'Walk the Doggy', txt: "Minimum twice a day" },
    {task: 'Prepare the dinner', txt: "Buy some food" },
    {task: 'Create a web app', txt: "Learn React" }
  ])

  const [task, setTask] = useState();
  const [txt, setTxt] = useState();

  function creationCarte(e){
    e.preventDefault();
    //console.log(task, txt);

    const newArray = [...myState, {task: task, txt:txt}]
    setMyState(newArray);
    console.log(newArray);

  }

  console.log(myState.map((todo, index) =>(
    <Card />
  )));

  return (
    <div>
      <Header />
      <div className="container px-3">

        <h2 className="title mt-5"> Enter your tasks here</h2>

        <form onSubmit={creationCarte}>

          <div className="field">
            <div className="control">
              <label htmlFor="task" className="label">Task</label>
              <input
                className="input"
                type="text"
                id="task"
                placeholder="Task to do" 
                onChange={e => setTask(e.target.value)}
                />

            </div>
          </div>

          <div className="field">
            <div className="control">
              <label htmlFor="txt" className="label">Details</label>
              <textarea
                className="input"
                type="text"
                id="txt"
                placeholder="Task to do"
                onChange={e => setTxt(e.target.value)}
                >
              </textarea>
            </div>
          </div>

          <div className="control">
            <button type="submit" className="button is-link has-background-primary">Create a task</button>
          </div>

        </form>

      {
        myState.map((todo, index) =>(
          <Card 
          key = {index}
          task = {todo.task} 
          txt = {todo.txt}
          />
        ))
      }

      </div> 
    </div>
  );
}

export default App;
