import React, { Component } from 'react';

const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    backgroundColor: 'white',
    cursor: 'grabbing',
    width: '20rem',
    opacity: "1",
  }
class WorkItemDragging extends Component {
    render() {
        return (
            <div style= {style}>
                {this.props.item.item.name}
            </div>
        );
    }
}

export default WorkItemDragging;