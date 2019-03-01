import React, { Component } from 'react';
import './App.css';
import TaskFuncTion from './components/TaskFunction/TaskFuncTion';
import WorkList from './components/WorkList/WorkList';
import WorkModal from './components/WorkModal';

class App extends Component {
  data=[
  {
    name : 'Soạn ReactJS',
    label: ["frontend",'api'],
    priority: 'cao',
    workers:['user_2','user_3'],
    status: 'finished',
  },
  {
    name : 'Soạn Python	',
    label: ["backend",'issue','api'],
    priority: 'cao',
    workers:['user_3'],
    status: 'finished',
  }]

  render() {



    return (
      <div className="App">
        <div>
          <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
          <div className="container-fluid">
            <div className="row">
              {/* PANEL */}
              <TaskFuncTion />
              <WorkList data={this.data} /> 
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
