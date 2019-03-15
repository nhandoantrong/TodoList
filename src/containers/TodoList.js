import React, { Component } from 'react';
import TaskFuncTion from '../components/TaskFunction/TaskFuncTion';
import WorkList from '../components/WorkList/WorkList';
import WorkModal from '../components/WorkModal';

//redux
import {connect}  from 'react-redux';
import {renderChangedList} from '../redux/actions/renderList';
import DraggingTag from '../components/WorkList/DraggingTag';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data:this.props.data,
        };
      }
    
      componentDidMount(){
        this.props.changeRenderData(this.state.data);
      }

    render() {
        
        return (
            <div>
                <div>
          <h1 className="text-center my-2">Work Management</h1>
          <div className="container-fluid">
            <div className="row">
              {/* PANEL */}

              <TaskFuncTion />
              <WorkList /> 
            </div>
          </div>
          {/* The Modal */}
          <WorkModal/>
        </div>
            </div>
        );
    }
}


const mapStateToProps=(state) => ({
  data:state.dataReducer
})
const mapDispatchToProps=(dispatch) =>({
  changeRenderData : (workList) =>{
    dispatch(renderChangedList(workList))
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);