import React, { Component } from 'react';
import StatusFilter from './StatusFilter';
import LabelFilter from './LabelFilter';
import PriorityFilter from './PriorityFilter';
import SortSelection from './SortSelection';
import {connect} from 'react-redux';
import {changeToAdd} from '../../redux/actions/ChangeAddStatus'
import {changeToInitialWork} from '../../redux/actions/EditWork'
import {renderChangedList} from '../../redux/actions/renderList'
import {noPriorityOrSort} from '../../redux/actions/filterOrSort'

class TaskFuncTion extends Component {

    constructor (props)
    {
      super(props);
      this.state={
        data:this.props.data,
      }
      this.createTaskButtonHandle=this._createTaskButtonHandle.bind(this);
    }


    componentWillReceiveProps(nextProps){
      if (this.props.data!== nextProps.data)
      {
        this.setState({
          data:nextProps.data
        })
      }
    }

    sortData = (data)=>{
      this.props.renderChangedList(data);
    }

    filterData=(type,value)=>{
      if (value==="-1") return;
      if (type !=="priority") {
        this.props.noPriorityOrSort();
      } 
      let {data}= this.state;
      data=[...data];
      
      data=data.filter(work=>{
        if (value==='') return true;
        if (type==='labelArr'){
          return (work[type].indexOf(value)!==-1)
        }
        return work[type]===parseInt(value);
      });
      console.log(data)
      this.props.renderChangedList(data);
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
                  Create New Task
                </button>
                {/* Filter */}
                <div className="px-3">
                  <StatusFilter filterData={this.filterData} type="status" />
                  <LabelFilter filterData={this.filterData} type='labelArr' />
                  <PriorityFilter filterData={this.filterData} type="priority" />
                <SortSelection data={this.state.data} sortData={this.sortData} />
                </div>
              </div>
        );
    }
}

const mapStateToProps = (state) => ({
  data:state.dataReducer
})
// const mapDispatchToProps=(dispatch)=>{
//   return {
//     changeToAdd: ()=> {
//       dispatch(changeToAdd())
//     },
//   };
// }
export default connect(mapStateToProps,{
  changeToAdd,
  changeToInitialWork,
  renderChangedList,
  noPriorityOrSort
})(TaskFuncTion);
