import * as acionTypes from '../actionTypes/actionTypesConstant';

export const addWork = (work) =>({
    type: acionTypes.ADD_WORK,
    work
})
export const editWork = (work) =>({
    type: acionTypes.EDIT_WORK,
    work
})
export const deleteWork = (work) =>({
    type: acionTypes.DELETE_WORK,
    work 
})