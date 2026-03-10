import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  let a = 0;
  return (
    <div>
      {/* <Home></Home>
      <About></About>
      <Contact></Contact> */}
      <h1>Hello World</h1>
      <h1></h1>

        <header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact/:name" element={<Profile></Profile>}></Route>
          <Route path = '*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
    </div>
  );
}

function PageNotFound(){
  return(
    <div>
      <h1> Page Not Found</h1>
    </div>
  )
}

function Profile() {
  let { name } = useParams();
  return (
    <div>
      <h1>Profile Page of {name}</h1>
    </div>
  );
}

export default App;

// const app = require("express"); //common js
// module.exports = app; //es6 before
