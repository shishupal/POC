import {ADD_POST} from '../actions/index'

export default  function (state = [], action) {
    switch(action.type){
        case ADD_POST:
            return  [action.payload.data,...state] ;//es6 verion [ //state.concat([action.payload.data]);
    }
  //  console.log(action.payload)
    return state;
}
