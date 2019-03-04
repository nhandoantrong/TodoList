import React, { Component } from 'react';
import './App.css';
import TaskFuncTion from './components/TaskFunction/TaskFuncTion';
import WorkList from './components/WorkList/WorkList';
import WorkModal from './components/WorkModal';
import mockupData from './data/TasksData'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[],
      isAdd: true,
    };
  }

  componentDidMount(){
    if (localStorage.getItem('userList'))
    {
      this.setState({
        data:JSON.parse(localStorage.getItem('userList'))
      })
    }
    else {
      localStorage.setItem('userList',JSON.stringify(mockupData));
      this.setState({
        data:JSON.parse(localStorage.getItem('userList'))
      })
    }
  }
  
  changeAddingState = (isAdd)=>{
    this.setState({
      isAdd
    })
  } 

  addWork = (work) =>{
    console.log(work);
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
          <WorkModal addWork={this.addWork}/>
        </div>

      </div>
    );
  }
}

export default App;
