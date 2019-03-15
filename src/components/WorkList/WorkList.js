import React, { Component } from 'react';
import WorkItem from './WorkItem';

import {connect} from 'react-redux';
import SearchBar from './SearchBar';
import LoadAllButton from './LoadAllButton';
import TrashBin from './TrashBin';

import update from 'immutability-helper'

import {renderChangedList} from '../../redux/actions/renderList'
class WorkList extends Component {

    state ={
      data:this.props.data,
      draggingID:'',
      onAir: false,
    }
    renderWorkItem = (data) =>{
        return data.map((workItem, key)=>{
            return <WorkItem item={workItem} 
            key={key} 
            index={key} 
            moveWork={this.moveWork} 
            draggingID={this.state.draggingID}
            onAir = {this.state.onAir}
            changeOnAirState={this.changeOnAirState}
            changeIdState={this.changeIdState}/>
        })
    }

    

    componentWillReceiveProps(nextProps){
      if (this.props.data!==nextProps.data){
        this.setState({
          data:nextProps.data,
        })
      }
    }


    changeOnAirState = (stt) =>{
      this.setState({
        onAir:stt,
      })
    }

    changeIdState= (id) =>{
      this.setState({
        draggingID:id
      })
    }

    moveWork = (dragIndex, hoverIndex) => {
      const dragWork = this.state.data[dragIndex];
      this.setState({
        data:update(this.state.data, {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragWork]],
        }),
        draggingID:dragWork.id

      },()=>{
        this.props.renderChangedList(this.state.data);
      })
    }

    

    render() {
        return (

            <div className="col-md-9 px-0">
                <div className="container-fluid px-0">
                  <div className="row header header--right d-flex align-items-center mx-0">
                    <div className="col-md-6">
                      <div className=" d-flex justify-content-between align-items-center">
                        <h3 className="text-left ml-2 ">
                          Task List
                        </h3>
                        <TrashBin />
                        <LoadAllButton />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group text-left my-0">
                        <SearchBar />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th className="text-center">Task</th>
                        <th className="text-center">Label</th>
                        <th className="text-center">Priority</th>
                        <th className="text-center">Executioner</th>
                        <th className="text-center">Action</th>
                        <th className="text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                        {this.renderWorkItem(this.state.data)}
                    </tbody>
                  </table>
                </div>
              </div>

        );
    }
}

const mapStateToProps=(state) => ({
  data:state.renderedList,
})

const mapDispatchToProps = (dispatch) =>({
  renderChangedList : (workList) =>{
    dispatch(renderChangedList(workList))
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(WorkList);