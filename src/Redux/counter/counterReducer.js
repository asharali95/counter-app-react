
var initialState = 0;

var counterReducer = (state=initialState ,action) =>{
  var {type} = action;
  switch(type){
      case "INCREMENT_COUNT":
          return state + 1
      case "DECREMENT_COUNT":
          return state - 1
      default:
          return state
  }
}

export default counterReducer;