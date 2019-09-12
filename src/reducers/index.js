// index.js

import { combineReducers } from 'redux';
import result from './contactReducer';

export default combineReducers({
    result: result
});