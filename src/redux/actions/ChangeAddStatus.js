import * as ActionTypes from '../actionTypes/isAddChange';

export function changeToAdd() {
    return { type: ActionTypes.CHANGE_TO_ADD }
  }


  export function changeToEdit() {
    return { type: ActionTypes.CHANGE_TO_EDIT }
  }