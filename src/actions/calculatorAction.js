import * as actionTypes from './actionTypes';

export const getResult = (input) => {
    return {
        type: actionTypes.GET_RESULT,
        input
        }
}

export const resetAll = () => {
    return {
        type: actionTypes.RESET_ALL
        }
}

export const getHistory = () => {
    return {
        type: actionTypes.GET_HISTORY
        }
}

export const showOthers = (input) => {
    return {
        type: actionTypes.SHOW_OTHERS,
        input: input
        }
}



