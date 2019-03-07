import * as actionTypes from '../actionTypes/actionTypesConstant';


const changeAddState = (isAdd = false, action) => {
    switch (action.type) {
      case actionTypes.CHANGE_TO_ADD:
      {
        isAdd=true;
        return isAdd

      }
      case actionTypes.CHANGE_TO_EDIT:
      {
        isAdd=false;
        return isAdd
      }
      default:
        return isAdd
    }
  }

export default changeAddState;