import React from 'react'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from '../../Redux/counter/counterActions'
const Buttons = ({incrementCounter, decrementCounter}) => {
    return (
        <div>
            <button onClick={incrementCounter}>+</button>
            <button onClick={decrementCounter}>-</button>
        </div>
    )
}
var actions = {
    incrementCounter,
    decrementCounter,
}
export default connect(null,actions)(Buttons)
