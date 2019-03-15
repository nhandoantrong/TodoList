import * as actionTypes from '../actionTypes/actionTypesConstant';
import update from 'immutability-helper'
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
        case actionTypes.REORDER_WORK_IN_RENDEDER_LIST:{
            let draggingIndex= action.draggingIndex;
            const draggingWork = workList[draggingIndex];
            let hoveredIndex= action.hoveredIndex;
            workList=update(workList,{
                $splice: [[draggingIndex, 1], [hoveredIndex, 0, draggingWork]],
            })
            console.log(workList);
            return [...workList]
        }
        default :{
            return workList;
        }
    }
}
export default renderedList;