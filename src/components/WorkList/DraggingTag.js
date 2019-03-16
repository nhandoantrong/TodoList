import React, { Component } from 'react';
import { DragLayer } from 'react-dnd';
import WorkItemDragging from './WorkItemDragging';
const layerStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    opacity: 1
};

function getItemStyles(props) {
    const { initialOffset, currentOffset, clientOffset  } = props;
    if (!initialOffset || !currentOffset) {
        return {
            display: 'none'
        };
    }

    const { x, y } = clientOffset;
    const transform = `translate(${x}px, ${y}px)`;
    return {
        transform: transform,
        WebkitTransform: transform
    };
}
class DraggingTag extends Component {
    renderItem = (itemType, item) => {
        switch (itemType) {
          case 'WORK_ITEM' :
            return <WorkItemDragging item={item} />
          default :
            return <WorkItemDragging item={item} />
        }
    }
    render() {
        let { itemType, isDragging,item} = this.props;
        if (!isDragging) {
            return null
          }
        return (
            <div style= {layerStyles}>
                <div style={getItemStyles(this.props)}>{this.renderItem(itemType,item)}</div>
            </div>
        );
    }
}


const dragCollect = (monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    clientOffset: monitor.getClientOffset()
})
export default DragLayer(dragCollect)(DraggingTag);