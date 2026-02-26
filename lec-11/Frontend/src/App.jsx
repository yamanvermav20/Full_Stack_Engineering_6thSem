import React, { useState } from 'react'

function App() {
  const [oldnumber, newnumber] = useState(null);
  const [answer, newanswer] = useState("");

  function handleClick() {
    const num = Math.floor(Math.random() * 10) + 1;
    newnumber(num);

    if (num === 7) {
      newanswer("You won");
    } else {
      newanswer("Your lost");
    }
  }

  return (
    <div>
      <h1>Hello</h1>

      <button onClick={handleClick}>clickme</button>

      <h1>{oldnumber} {answer}</h1>

      {answer === "You won" && (<img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" />)}
      {answer === "Your lost" && (<img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"/>)}</div>
  )
}

export default App