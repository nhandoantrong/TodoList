import * as acionTypes from '../actionTypes/actionTypesConstant'

const initialState = {
    priorityChosen : false,
    sortChosen: false,
}

const filterOrSortReducer = (state=initialState, action) =>{
    switch (action.type) {
        case acionTypes.PRIORITY_FILTER_CHOSEN: {
            return {priorityChosen: true,sortChosen:false}
        }
        case acionTypes.SORT_CHOSEN :{
            return {priorityChosen: false,sortChosen:true}
        }
        case acionTypes.NO_PRIRORITY_OR_SORT:{
            return initialState;
        }
        default: return state;
    }
}

export default filterOrSortReducer;