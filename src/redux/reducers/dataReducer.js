import * as actionTypes from '../actionTypes/actionTypesConstant'
import mockupData from '../../data/TasksData'
const getInitialState = () =>{
    if (localStorage.getItem('userList'))
    {
        return JSON.parse(localStorage.getItem('userList'))
    }
    else {
      localStorage.setItem('userList',JSON.stringify(mockupData));
      return JSON.parse(localStorage.getItem('userList'))
    }
}
const initialState =getInitialState();

const data = (workList= initialState, action) =>{

    switch (action.type) {
        case actionTypes.ADD_WORK : {
            workList = [...workList,action.work];
            localStorage.setItem('userList',JSON.stringify(workList));
            return workList;
        }
        case actionTypes.EDIT_WORK : {
            let newWork= action.work;
            let newWorkList= [...workList];
            let index=newWorkList.findIndex(work => work.id===newWork.id);

            newWorkList[index]=newWork;
            workList=newWorkList;
            localStorage.setItem('userList',JSON.stringify(workList));
            return workList;
        }
        case actionTypes.DELETE_WORK : {
            let deletedWork= action.work;
            let index=workList.findIndex(work => work.id===deletedWork.id);
            let newList= [...workList];
            newList.splice(index,1);
            workList=newList;
            localStorage.setItem('userList',JSON.stringify(workList));

            return workList;
        }
        default :{
            return workList;
        }
    }
}

export default data;