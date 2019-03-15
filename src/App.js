import React, { Component } from 'react';
import './App.css';
import TodoList from './containers/TodoList';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import DraggingTag from './components/WorkList/DraggingTag';

class App extends Component {

  

  render() {



    return (
      <div className="App"style ={{position:"relative"}}>
      <TodoList />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
