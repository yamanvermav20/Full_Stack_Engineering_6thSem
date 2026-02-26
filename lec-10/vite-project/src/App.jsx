import React, { use, useEffect } from 'react'
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);
  let[random, setRandom] = useState(0);
  

  //fetchTodo is a function which will fetch data from server and also has some side effects like setInterval, so we will use useEffect to call this function
  //mounting phase --> when component is rendered for the first time
  useEffect(() => {
    function fetchTodo(){
      //code to fetch data;
      console.log("fetching data");
      let id = setInterval(() => {
        console.log("running setInterval");
      }, 1000);

      //Clean Up function --> it runs only on unmounting phase of component
      return () => {
        clearInterval(id);
      };
    }
}, []); // empty dependency array means this useEffect will run only once when component is mounted
  function changeCount(){
    setCount(count + 1);
  }
  // fetchTodo();
  useEffect(() => {
    fetchTodo();
  }, []);

  function runOnCountChange(){
    //some work related to count variable 
    console.log("count is changed");
  }
  function changeRandom(){
    //some code to change random variable
    console.log("random is changed");
    setRandom(Math.random());
  }
  useEffect(() => {
    runOnCountChange();
  }, [count, random] ); // will run when count or random variable is changed
  return (
    <div>
      <button onClick = {changeCount}>count</button>
      <button onClick = {changeRandom}>random</button>
      <h1> count is {count}</h1>
    </div>
  )
}

export default App