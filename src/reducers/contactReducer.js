import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type){
      case actionTypes.CREATE_NEW_CONTACT:
        console.log("trigger ==4****************");
        return [
          ...state,
          Object.assign({}, action.contact)
        ];

      case actionTypes.REMOVE_CONTACT:
        return state.filter((data, i) => i !== action.id);

      case actionTypes.GET_RESULT:
        return state.filter((data, i) => i !== action.id);
        return {
        ...state,
        value: eval(state.calc + state.value).toString(),
        lastValue: "",
        calc: ""
      }

      default:
            return state;
    }
  };