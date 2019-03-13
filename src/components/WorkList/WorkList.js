import React, { Component } from 'react';
import WorkItem from './WorkItem';

import {connect} from 'react-redux';
import SearchBar from './SearchBar';
import LoadAllButton from './LoadAllButton';
import TrashBin from './TrashBin';
class WorkList extends Component {

    state ={
      data:this.props.data
    }
    renderWorkItem = (data) =>{
        return data.map((workItem, key)=>{
            return <WorkItem item={workItem} key={key} index={key} handleDrop={this.handleDrop}/>
        })
    }

    componentWillReceiveProps(nextProps){
      if (this.props.data!==nextProps.data){
        this.setState({
          data:nextProps.data,
        })
      }
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
                        <th className="text-center">Index</th>
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
export default connect(mapStateToProps)(WorkList);