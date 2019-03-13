import React, { Component } from 'react';
import {DropTarget} from 'react-dnd';
import {deleteWork} from '../../redux/actions/dataAction';
import {} from '../../redux/actions/renderList'
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


const type="WORK_ITEM_TO_DELETE";

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
export default DropTarget(type,{},collect)(TrashBin);