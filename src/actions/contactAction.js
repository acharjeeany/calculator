// contactAction.js

import * as actionTypes from './actionTypes';

export const createContact = (contact) => {
	console.log("trigger ==2****************"+contact);
	console.log(contact);
    return {
      type: actionTypes.CREATE_NEW_CONTACT,
      contact: contact
    }
  };

export const deleteContact = (id) => {
    return {
        type: actionTypes.REMOVE_CONTACT,
        id: id
    }
}

export const getResult = (result) => {
    return {
        type: actionTypes.GET_RESULT,
        result: result
    }
}


