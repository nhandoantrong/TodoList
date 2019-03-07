import * as actionTypes from '../actionTypes/actionTypesConstant';


const initialWork={
    id: '',
    name: "",
    labelArr: [],
    priority: 2 , 
    memberIDArr: [],
    status: 1, 
    description: ""
}

const editedWorkReducer = (work=initialWork, action)=>{
    switch (action.type) {
        case actionTypes.CHANGE_WORK:{
            work=action.work;
            return work
        }
        case actionTypes.CHANGE_TO_INITIAL_WORK:{
            return work=initialWork
        }
        default:{
            return work;
        }
    }
}

export default editedWorkReducer;