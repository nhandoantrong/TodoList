import * as actionTypes from '../actionTypes/editedWork';


const initialWork={
    id: '',
    name: "",
    labelArr: [],
    priority: '', 
    memberIDArr: [],
    status: '', 
    description: ""
}

const editedWorkReducer = (work=initialWork, action)=>{
    switch (action.type) {
        case actionTypes.CHANGE_WORK:{
            work=action.work;
            console.log(work)
            return work
        }
        case actionTypes.CHANGE_TO_INITIAL_WORK:{
            return work=initialWork
        }
        default:{
            return work=initialWork;
        }
    }
}

export default editedWorkReducer;