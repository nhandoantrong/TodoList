import React, { Component } from 'react';
import Label from './Label';

import {connect} from 'react-redux';
import {changeToEdit} from '../../redux/actions/ChangeAddStatus';
import {changeWork} from '../../redux/actions/EditWork';
import {deleteWork,editWork} from '../../redux/actions/dataAction';
import {editRenderedList,deleteWorkInRenderedList} from '../../redux/actions/renderList'


//drag and drop
import { DragSource } from 'react-dnd';

class WorkItem extends Component {

    state ={
        work: this.props.item
    }

    componentWillReceiveProps = (nextProps) =>{
        if(this.props.item!==nextProps.item)
        {
            this.setState({
                work:nextProps.item
            })
        }

    }


    editButtonHandle= (work)=>{
        this.props.changeToEdit();
        this.props.changeWork(work);
    }

    deleteButtonHandle= (work)=>{
        this.props.deleteWork(work);
        this.props.deleteWorkInRenderedList(work);
    }


    completeButtonHandle= (status)=>{
        this.setState({
            work:{
                ...this.state.work,
                status: status,
            }
        },()=>{
            this.props.editWork(this.state.work);
            this.props.editRenderedList(this.state.work);
        })
    }

    renderLabel=(labels)=>{
        return labels.map((label,index)=>{
            return <Label labelName={label} key={index} />
        })
    }

    renderAvatar=(memberIDArr)=>{
        return memberIDArr.map((user,index)=>{
            return <img src={`./img/${user}.jpg`} className="user" alt="liar" key={index}></img>
        })
    }

    getPriorityString=(priorityNumber)=>{
        switch (priorityNumber){
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
            default:{

            }
        }
    }

    getPriorityColor=(priorityNumber) =>{
        switch (priorityNumber){
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
            default:{
                return 'text-warning'
            }
        }
    }

    getStatusIcon = (status)=>{
        switch (status){
            case 1:
            {
                return <i className="fa fa-square-o mr-2"
                    style={{cursor:"pointer"}}
                    onClick={this.completeButtonHandle.bind(this,2)}
                ></i>
            }
            case 2:
            {
                return <i className="fa fa-check-square-o mr-2"
                style={{cursor:"pointer"}}
                onClick={this.completeButtonHandle.bind(this,1)}

                ></i>
            }
            case 3:
            {
                return <i className="fa fa-trash-o mr-2"
                style={{cursor:"pointer"}}
                onClick={this.completeButtonHandle.bind(this,1)}
                ></i>
            }
            default:{
                return ''
            }
        }
    }

    render() {
        let {index,item,isDragging,connectDragSource}= this.props;
        return connectDragSource(

            <tr>
                <td className="text-center">{index+1}</td>
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
                        onClick={this.editButtonHandle.bind(this,item)}
                        style={{marginRight: "5px"}}
                    >

                        Edit
                    </button>



                    <button
                        type="button"
                        className="btn btn-outline-success"
                        onClick={item.status===1? this.completeButtonHandle.bind(this,2) : this.completeButtonHandle.bind(this,1)}
                        style={{marginRight: "5px"}}

                        >
                        {item.status===1? 'Finished' :'Ongoing'}
                    </button>

                    <button
                        type="button"
                        className="btn btn-outline-warning"
                        onClick={item.status===3? this.completeButtonHandle.bind(this,1) : this.completeButtonHandle.bind(this,3)}
                        style={{marginRight: "5px"}}

                    >
                        {item.status===3? 'Continued' :'Terminate'}
                    </button>
                



                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={this.deleteButtonHandle.bind(this,item)}
                    >
                        Delete
                    </button>
                </td>
                <td className="text-center">
                    {this.getStatusIcon(item.status)}
                </td>
            </tr>

        );
    }
}

const mapDispatchToProps=(dispatch)=>(
     {
      changeToEdit: ()=> {
        dispatch(changeToEdit())
      },
      changeWork: (work)=>{
          dispatch(changeWork(work));
      },
      deleteWork: (work) =>{
          dispatch(deleteWork(work))
      },
      editWork: (work) =>{
        dispatch(editWork(work))
      },
      editRenderedList : (work) =>{
          dispatch(editRenderedList(work))
      },
      deleteWorkInRenderedList : (work) => {
          dispatch(deleteWorkInRenderedList(work))
      }
    }
)


const typeToDelete ="WORK_ITEM_TO_DELETE";
const workToDeleteSource ={
    beginDrag(props){
        return props.item;
    },
    endDrag(props,monitor,component){
        if (monitor.didDrop()){
            props.deleteWork(props.item);
            props.deleteWorkInRenderedList(props.item);
        }
  
    }
}

const collect =(connect, monitor) =>({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging

})
export default connect(null,mapDispatchToProps)( DragSource(typeToDelete, workToDeleteSource , collect)(WorkItem));

