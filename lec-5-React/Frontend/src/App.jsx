import { div } from 'framer-motion/client'
import React from 'react'

const App = () => {
  let a = Math.random() * 10;
  let num1 = 10;
  let num2 = 23;
  return (
    <div>
      <h1> Hello world we are in the class</h1>
      <h3>{a}</h3>
      <p>{num1 + num2}</p>
      <Header></Header>
      <Footer></Footer>
    </div>
  )
}

//component should start with capital letter //so that it differs from the html tag
function Header(){
  return(
    <div>
      <div className = "logo">Logo</div>
      <ul className = "navLinks">
        <li className = "navList"> Home</li>
        <li className = "navList"> About</li>
        <li className = "navList"> Contact</li>
      </ul>
    </div>
  )
}

function Footer(){
  return(
    <div>
      <input
      type = "{world}"
      placeholder = "Enter a value"></input>
      <button>Submit</button>
    </div>
  )
}
export default App
