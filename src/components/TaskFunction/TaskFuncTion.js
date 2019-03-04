import React, { Component } from 'react';
import StatusFilter from './StatusFilter';
import LabelFilter from './LabelFilter';
import PriorityFilter from './PriorityFilter';
import SortSelection from './SortSelection';
import {connect} from 'react-redux';
import {changeToAdd} from '../../redux/actions/ChangeAddStatus'
import {changeToInitialWork} from '../../redux/actions/EditWork'

class TaskFuncTion extends Component {

    constructor (props)
    {
      super(props);
      this.createTaskButtonHandle=this._createTaskButtonHandle.bind(this);
    }

    _createTaskButtonHandle=()=>{
      this.props.changeToAdd();
      this.props.changeToInitialWork();
    }
    render() {
        return (
                <div className="col-md-3 text-center px-0">
                <div className="header header--left d-flex align-items-center">
                  <img src="./img/user_1.jpg" className="ml-2 user" alt="liar" />
                  <h3 className="text-white d-inline font-weight-light ml-2">
                    Đoàn Trọng Nhân
                </h3>
                </div>
                <button
                  type="button"
                  className="btn my-3 btn--newTask"
                  data-toggle="modal"
                  data-target="#modalTask"
                  onClick={()=>this.createTaskButtonHandle()}
                >
                  <i className="fa fa-pencil-square-o" />
                  Tạo Task mới
                </button>
                {/* Filter */}
                <div className="px-3">
                  <StatusFilter />
                  <LabelFilter />
                  <PriorityFilter />
                <SortSelection />
                </div>
              </div>
        );
    }
}

// const mapDispatchToProps=(dispatch)=>{
//   return {
//     changeToAdd: ()=> {
//       dispatch(changeToAdd())
//     },
//   };
// }
export default connect(null,{
  changeToAdd,
  changeToInitialWork
})(TaskFuncTion);
