import React, { Component } from 'react';
import './App.css';
import TaskFuncTion from './components/TaskFunction/TaskFuncTion';
import WorkList from './components/WorkList/WorkList';
import WorkModal from './components/WorkModal';
import data from './data/TasksData'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:data,
      isAdd: true,
    };
  }

  changeAddingState = (isAdd)=>{
    this.setState({
      isAdd
    })
  } 

  render() {



    return (
      <div className="App">
        <div>
          <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
          <div className="container-fluid">
            <div className="row">
              {/* PANEL */}
              <TaskFuncTion />
              <WorkList data={this.state.data} /> 
            </div>
          </div>
          {/* The Modal */}
          <WorkModal />
        </div>

      </div>
    );
  }
}

export default App;
