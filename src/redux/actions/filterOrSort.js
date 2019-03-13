import * as actionTypes from '../actionTypes/actionTypesConstant'

export const priorityFilterChosen = () =>({
    type: actionTypes.PRIORITY_FILTER_CHOSEN
})

export const sortChosen = () =>({
    type: actionTypes.SORT_CHOSEN,
})

export const noPriorityOrSort = () =>({
    type: actionTypes.NO_PRIRORITY_OR_SORT
})