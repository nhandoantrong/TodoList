import * as actionTypes from '../actionTypes/actionTypesConstant';

export const renderChangedList=(workList)=>({
    type: actionTypes.RENDER_CHANGED_LIST,
    workList
})