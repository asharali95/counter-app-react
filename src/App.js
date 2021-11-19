import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import CounterValue from './Components/CounterValue/CounterValue';

class App extends React.Component {
  render(){
    return (
      <div className="App">
       <Header/>
        <CounterValue/>      
      </div>
    );
  }
}

export default App;
