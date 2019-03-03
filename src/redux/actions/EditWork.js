import * as acionTypes from '../actionTypes/editedWork';

export const changeWork = (work) =>({
    type: acionTypes.CHANGE_WORK,
    work
})

export const changeToInitialWork= ()=>({
    type: acionTypes.CHANGE_TO_INITIAL_WORK,

})