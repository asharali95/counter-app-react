import React from 'react'
import { connect } from 'react-redux';
import Buttons from '../Buttons/Buttons'

var CounterValue =({counter}) => {
    return (
        <div>
            <h2>{counter}</h2>
            <Buttons/>
        </div>
    );
}
var mapState =(state) =>({
    counter: state.counter,
})
export default connect(mapState)(CounterValue);