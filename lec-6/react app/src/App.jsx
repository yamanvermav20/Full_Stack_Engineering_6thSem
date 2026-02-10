import React from 'react'
import Header from './component/headerComponent/Header'
import Footer from './component/footerComponent/Footer'
import { sum } from './component/headerComponent/Header'    //named exports must have curly braces
import { multiply } from './component/headerComponent/Header'

const App = () => {
  let ans = sum(1, 3);
  return (
    <div>
      <Header ans = {ans} name = "Yaman Verma"></Header>
      <p>{ans}</p>
      <Footer></Footer>
    </div>
  )
}

export default App
