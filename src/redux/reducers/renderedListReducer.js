import * as actionTypes from '../actionTypes/actionTypesConstant';
const initialState= [{
    id: 'ABC',
    name: "Soạn ReactJS",
    labelArr: ["Frontend", "Backend"],
    priority: 1, 
    memberIDArr: ["user_2"],
    status: 2, 
    description: "Phải soạn ReactJS kèm với NodeJS và Redux"
}];

const renderedList= (workList= initialState,action)=>{
    switch (action.type){
        case actionTypes.RENDER_CHANGED_LIST:{
            return workList=action.workList;
        }
        default :{
            return workList;
        }
    }
}
export default renderedList;