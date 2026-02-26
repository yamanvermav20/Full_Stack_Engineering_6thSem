import React from 'react'

function App() {
  const [oldnumber, newnumber] = useState(null);
  const [answer, newanswer] = useState("");

  function handleClick(){
    const num = Math.floor(Math.random * 10) + 1;
    newnumber(num);
    if(num == 7){
      newanswer("You won");
    }
    else{
      newanswer("Your lost");
    }
  }

  return (
    <div>
      <h1>Hello</h1>;
      <button onClick = {handleClick}>clickme</button>;
      <h1>{newnumber} + {newanswer}</h1>
    </div>
  )
}

export default App
