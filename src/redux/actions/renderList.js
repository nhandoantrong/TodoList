import * as actionTypes from '../actionTypes/actionTypesConstant';

export const renderChangedList=(workList)=>({
    type: actionTypes.RENDER_CHANGED_LIST,
    workList
})

export const editRenderedList= (work) =>({
    type: actionTypes.EDIT_RENDERED_LIST,
    work
})

export const deleteWorkInRenderedList = (work) => ({
    type:actionTypes.DELETE_WORK_IN_RENDERED_LIST,
    work
})

export const reorderWorkInRenderedList= (draggingIndex,hoveredIndex) =>({
    type: actionTypes.REORDER_WORK_IN_RENDEDER_LIST,
    draggingIndex,
    hoveredIndex,
})