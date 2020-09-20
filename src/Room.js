import React, { useState } from 'react';
import './Room.css'

function Room() {
  let [isLit, setLit] = useState(false);
  let [age , setAge] = useState(23);
  //let age=45;
  //console.log("State = ", state);

function updateLit() {
  console.log("Button Clicked");
  setLit(!isLit);
  //isLit = !isLit;
  //age = 67;
}

function increaseAge() {
  console.log("Increase Age Button Clicked");
  setAge(++age);
  //isLit = !isLit;
  //age = 67;
}
  return (
    <div className={"room "+(isLit?"lit":"dark")}>
      This room is {isLit? "lit": "dark"}
      <br/>
      Age : {age}
      <br/>
      <button onClick={updateLit} >
        Toggle Light
      </button>
      <br/>
      <button onClick={increaseAge} >
        Increase Age
      </button>
    </div>

  );
}

export default Room;
