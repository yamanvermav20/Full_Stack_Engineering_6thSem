import React, { useState } from 'react'

const App = () => {
  //donot change previous state directly create a newState value
  let [state, setState] = useState(0);
  let [user, setUser] = useState([{name: "Nitesh", age: 24}])

  function increaseByOne(){
    //useState(state++) // dont do this
    // state = state + 1; //can do this
    let newState = state + 1;
    setState(newState)
  }

  function addUser(name, age){
    // user.push(name, age);
    // user.push({name : name, age : age})
    // let newUser = []
    // user.array.forEach((u) => {
    //   newUser.push(u);
    // });
    // newUser.push({name: name, age: age});

    /* Spread Operator(...) */

    // [1, 2, 3] ... ==> 1, 2, 3 [{}, {}] ... ==> {} {} 
    let newUser = [...user, {name: name, age: age}];
    setUser(newUser);
  }

  // [{name : "Yaman Verma"}]
  return (
    <div>
    {
      user.map((u, index) => {
        //return(<div>
        // <h2>Name: {u.name}</h2>
        //  <h4>age : {u.age}</h4>
        //</div>)
        return <UserComponent key={index} name={u.name} age={u.age}></UserComponent>
      })}
    <button onClick={function(){addUser("Yaman", 25)}}> Add User</button>
    </div>
  )
}

function UserComponent({name, age}){
  return(
    <div>
      <h2>Name: {name}</h2>
      <h4>age : {age}</h4>
    </div>
  )
}

export default App