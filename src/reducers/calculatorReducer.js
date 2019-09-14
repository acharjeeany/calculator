import * as actionTypes from '../actions/actionTypes';
import store from '../store/configureStore';

const initialValues = {result : '',history : [],history_click : 0};

export default (state=initialValues,action) => {

	switch(action.type){
		case actionTypes.SHOW_OTHERS:
        return Object.assign({}, state, {
        result: state.result + action.input
      });
		
		case actionTypes.GET_RESULT:
		let tem;
		tem=eval(state.result);
		
        return Object.assign({}, state, {
        result: tem, history:state.history.concat(tem)
      });
		

		case actionTypes.RESET_ALL:
			
		return Object.assign({}, state, {
        result: "",history_click: 0
      });

		case actionTypes.GET_HISTORY:
		let history_len;
		history_len = state.history.length;
      	if (state.history_click < history_len) {
	        return Object.assign({}, state, {
	          result: state.history[history_len - (state.history_click + 1)],
	          history_click: state.history_click + 1
	        });
      	} else {
        return Object.assign({}, state, {
          result: "",
          history_click: 0
        });
      }
    default:
      return state;
  }
};
		