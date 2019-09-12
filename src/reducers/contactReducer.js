import * as actionTypes from '../actions/actionTypes';

export default (state=[], action) => {
    /*switch (action.type){
      case actionTypes.CREATE_NEW_CONTACT:
        console.log("trigger ==4****************");
        return [
          ...state,
          Object.assign({}, action.contact)
        ];
      
      case actionTypes.REMOVE_CONTACT:
        return state.filter((data, i) => i !== action.id);*/
      switch(action.type){
      case actionTypes.GET_RESULT:
        //console.log(action.result);
        //console.log(action.result);
        //return state.filter((data, i) => i !== action.id);
        
        //console.log(eval(action.result));
        //result: eval(action.result)
       return action.result=eval(action.result);
      default:
            return state;
    }
  };