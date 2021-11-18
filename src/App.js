import './App.css';
import React from 'react';

class App extends React.Component {
  state={
      setCount: 0,
  }
  render(){
    return (
      <div className="App">
        <h1>Counter App</h1>
        <h2>{this.state.setCount}</h2>
        <button onClick={()=>{
          this.setState({
            setCount: this.state.setCount+1,
          })
        }}>+</button>
        <button onClick={()=>{
          this.setState({
            setCount: this.state.setCount-1,
          })
        }}>-</button>
      </div>
    );
  }
}

export default App;
