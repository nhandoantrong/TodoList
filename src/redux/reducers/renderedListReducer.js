import * as actionTypes from '../actionTypes/actionTypesConstant';
const initialState= [];

const renderedList= (workList= initialState,action)=>{
    switch (action.type){
        case actionTypes.RENDER_CHANGED_LIST:{
            return workList=action.workList;
        }
        case actionTypes.EDIT_RENDERED_LIST:{
            let index = workList.findIndex(work =>work.id===action.work.id)
            workList[index] = action.work
            return workList=[...workList];
        }
        case actionTypes.DELETE_WORK_IN_RENDERED_LIST:{
            let index = workList.findIndex(work =>work.id===action.work.id)
            workList.splice(index,1);
            return workList=[...workList];
        }
        default :{
            return workList;
        }
    }
}
export default renderedList;