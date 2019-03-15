import React, { Component } from 'react';
import {DropTarget} from 'react-dnd';
import {deleteWork} from '../../redux/actions/dataAction';
import {deleteWorkInRenderedList} from '../../redux/actions/renderList'
import {connect} from 'react-redux'
class TrashBin extends Component {
    render() {
        const {connectDropTarget,hovered,canDrop} =this.props;
        const color = hovered ? 'danger' : 'success';
        return connectDropTarget(
            <div className={`text-${color}`} style={{fontSize:"1.3rem", display:canDrop? "block" : "none"}}>
                <i className="fa fa-trash"></i>
            </div>
        );
    }
}


const type="WORK_ITEM";

const dropTarget ={
    drop(props,monitor,collect)
    {
        if (monitor.getItem())
        {
            let {item} = monitor.getItem();
            props.deleteWork(item);
            props.deleteWorkInRenderedList(item);
        }
    }
}

const collect =(connect,monitor) =>{
    return{
        connectDropTarget : connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem(),
        canDrop: monitor.canDrop(),
        didDrop: monitor.didDrop(),
        dropResult: monitor.getDropResult(),
    }
}

const mapDispatchtoProps = (dispatch) =>({
    deleteWork: (work) =>{
        dispatch(deleteWork(work));
    },
    deleteWorkInRenderedList: (work) =>{
        dispatch(deleteWorkInRenderedList(work))
    }
})
export default connect(null,mapDispatchtoProps)( DropTarget(type,dropTarget,collect)(TrashBin));