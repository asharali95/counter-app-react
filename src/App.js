import './App.css';
import React, { useState ,useCallback} from 'react';
import Header from './Components/Header/Header';
 
var functionsSet = new Set()
const App = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [toggle, setToggle] = useState(false)

  var incrementOne = useCallback(() =>setCount1(count1+1),[count1])
  var incrementTwo = useCallback(() =>setCount2(count2+1),[count2])

  functionsSet.add(incrementOne)
  functionsSet.add(incrementTwo)

  console.log(functionsSet)
    return (
      <div className="App">
        <h1>Counter 1</h1>
        <h2>{count1}</h2>
        <button  onClick ={incrementOne}>increment</button>
        <hr/>
        <h1>Counter 2</h1>
        <h2>{count2}</h2>
        <button onClick ={incrementTwo}>increment</button>
        <hr/>
        <button onClick={() => setToggle(!toggle)}>toggle</button>
       {toggle && <Header content = "Header"/>}   
      </div>
    );
  }

export default App;
