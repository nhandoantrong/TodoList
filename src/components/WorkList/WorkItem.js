import React, { Component } from 'react';
import Label from './Label';

import { connect } from 'react-redux';
import { changeToEdit } from '../../redux/actions/ChangeAddStatus';
import { changeWork } from '../../redux/actions/EditWork';
import { deleteWork, editWork } from '../../redux/actions/dataAction';
import { editRenderedList, deleteWorkInRenderedList ,reorderWorkInRenderedList } from '../../redux/actions/renderList'


//drag and drop
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'



class WorkItem extends Component {

    state = {
        work: this.props.item,
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.props.item !== nextProps.item) {
            this.setState({
                work: nextProps.item
            })
        }

    }


    editButtonHandle = (work) => {
        this.props.changeToEdit();
        this.props.changeWork(work);
    }

    deleteButtonHandle = (work) => {
        this.props.deleteWork(work);
        this.props.deleteWorkInRenderedList(work);
    }


    completeButtonHandle = (status) => {
        this.setState({
            work: {
                ...this.state.work,
                status: status,
            }
        }, () => {
            this.props.editWork(this.state.work);
            this.props.editRenderedList(this.state.work);
        })
    }

    renderLabel = (labels) => {
        return labels.map((label, index) => {
            return <Label labelName={label} key={index} />
        })
    }

    renderAvatar = (memberIDArr) => {
        return memberIDArr.map((user, index) => {
            return <img src={`./img/${user}.jpg`} className="user" alt="liar" key={index}></img>
        })
    }

    getPriorityString = (priorityNumber) => {
        switch (priorityNumber) {
            case 1:
                {
                    return 'High'
                }
            case 2:
                {
                    return 'Low'
                }
            case 3:
                {
                    return 'Medium'
                }
            default: {

            }
        }
    }

    getPriorityColor = (priorityNumber) => {
        switch (priorityNumber) {
            case 1:
                {
                    return 'text-danger'
                }
            case 2:
                {
                    return 'text-info'
                }
            case 3:
                {
                    return 'text-success'
                }
            default: {
                return 'text-warning'
            }
        }
    }

    getStatusIcon = (status) => {
        switch (status) {
            case 1:
                {
                    return <i className="fa fa-square-o mr-2"
                        style={{ cursor: "pointer" }}
                        onClick={this.completeButtonHandle.bind(this, 2)}
                    ></i>
                }
            case 2:
                {
                    return <i className="fa fa-check-square-o mr-2"
                        style={{ cursor: "pointer" }}
                        onClick={this.completeButtonHandle.bind(this, 1)}

                    ></i>
                }
            case 3:
                {
                    return <i className="fa fa-trash-o mr-2"
                        style={{ cursor: "pointer" }}
                        onClick={this.completeButtonHandle.bind(this, 1)}
                    ></i>
                }
            default: {
                return ''
            }
        }
    }
    componentDidMount() {
        const { connectDragPreview } = this.props
    if (connectDragPreview) {
      // Use empty image as a drag preview so browsers don't draw it
      // and we can draw whatever we want on the custom drag layer instead.
      connectDragPreview(getEmptyImage(), {
        // IE fallback: specify that we'd rather screenshot the node
        // when it already knows it's being dragged so we can hide it with CSS.
        captureDraggingState: true,
      })
    }
      }

    render() {
        let { item, connectDragSource, connectDropTarget, draggingID,onAir } = this.props;
        let opacity = item.id===draggingID? 0 : 1;
        
        if (!onAir) opacity=1;
        return connectDragSource(connectDropTarget(

            <tr style={Object.assign({},style,{opacity})}>
                    <td className="text-center">{item.name}</td>
                <td className="text-center">
                    {this.renderLabel(item.labelArr)}
                </td>
                <td className={`${this.getPriorityColor(item.priority)} font-weight-bold text-center`}>
                    {this.getPriorityString(item.priority)}
                </td>
                <td className="text-center">
                    {this.renderAvatar(item.memberIDArr)}
                </td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        data-toggle="modal"
                        data-target="#modalTask"
                        onClick={this.editButtonHandle.bind(this, item)}
                        style={{ marginRight: "5px" }}
                    >

                        Edit
                    </button>



                    <button
                        type="button"
                        className="btn btn-outline-success"
                        onClick={item.status === 1 ? this.completeButtonHandle.bind(this, 2) : this.completeButtonHandle.bind(this, 1)}
                        style={{ marginRight: "5px" }}

                    >
                        {item.status === 1 ? 'Finished' : 'Ongoing'}
                    </button>

                    <button
                        type="button"
                        className="btn btn-outline-warning"
                        onClick={item.status === 3 ? this.completeButtonHandle.bind(this, 1) : this.completeButtonHandle.bind(this, 3)}
                        style={{ marginRight: "5px" }}

                    >
                        {item.status === 3 ? 'Continued' : 'Terminate'}
                    </button>




                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={this.deleteButtonHandle.bind(this, item)}
                    >
                        Delete
                    </button>
                </td>
                <td className="text-center">
                    {this.getStatusIcon(item.status)}
                </td>
            </tr>

        ));
    }
}
const style = {
    cursor: 'move',
  }

const mapDispatchToProps = (dispatch) => (
    {
        changeToEdit: () => {
            dispatch(changeToEdit())
        },
        changeWork: (work) => {
            dispatch(changeWork(work));
        },
        deleteWork: (work) => {
            dispatch(deleteWork(work))
        },
        editWork: (work) => {
            dispatch(editWork(work))
        },
        editRenderedList: (work) => {
            dispatch(editRenderedList(work))
        },
        deleteWorkInRenderedList: (work) => {
            dispatch(deleteWorkInRenderedList(work))
        },
        reorderWorkInRenderedList: (draggingIndex,hoveredIndex) =>{
            dispatch(reorderWorkInRenderedList (draggingIndex,hoveredIndex))
        }
        
    }
)

/// delete by dragging
const type = "WORK_ITEM";
const dragSource = {
    beginDrag(props,monitor,compnent) {
        props.changeOnAirState(true);
        
        return {
            id: props.id,
            index: props.index,
            item: props.item,
        }
    },
    endDrag(props, monitor, component) {
        props.changeOnAirState(false)
        props.changeIdState('');
        if (monitor.didDrop()) {
            return {
                id: props.id,
                index: props.index,

            }
        }

    }
}

const sourceCollect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
    itemType: monitor.getItemType(),

})


const workTarget = {
    hover(props, monitor, component) {
        if (!component) {
            return null
        }
        const dragIndex = monitor.getItem().index
        const hoverIndex = props.index
        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return
        }
        // Determine rectangle on screen
        const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()
        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
        // Determine mouse position
        const clientOffset = monitor.getClientOffset()
        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top
        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%
        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return
        }
        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return
        }
        // Time to actually perform the action
        props.moveWork(dragIndex, hoverIndex)
        monitor.getItem().index = hoverIndex;
    },
}


const targetCollect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
    }
}
export default connect(null, mapDispatchToProps)(
    DropTarget(type, workTarget, targetCollect)(
        DragSource(type, dragSource, sourceCollect)(
            (WorkItem))
    )
);

