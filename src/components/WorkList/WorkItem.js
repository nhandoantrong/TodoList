import React, { Component } from 'react';
import Label from './Label';

import {connect} from 'react-redux';
import {changeToEdit} from '../../redux/actions/ChangeAddStatus';
import {changeWork} from '../../redux/actions/EditWork';
import {deleteWork} from '../../redux/actions/dataAction'
class WorkItem extends Component {
    editButtonHandle= (work)=>{
        this.props.changeToEdit();
        this.props.changeWork(work);
    }

    deleteButtonHandle= (work)=>{
        this.props.deleteWork(work)
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
                return 'Cao'
            }
            case 2:
            {
                return 'Thấp'
            }
            case 3:
            {
                return 'Trung bình'
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
                return <i className="fa fa-square-o mr-2"></i>
            }
            case 2:
            {
                return <i className="fa fa-check-square-o mr-2"></i>
            }
            case 3:
            {
                return <i className="fa fa-trash-o mr-2"></i>
            }
            default:{
                return ''
            }
        }
    }

    render() {
        let {index,item}= this.props;
        return (

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
                    >

                        Sửa
                    </button>



                    <button
                        type="button"
                        className="btn btn-outline-success"
                    >
                        Xong
                    </button>



                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={this.deleteButtonHandle.bind(this,item)}
                    >
                        Xóa
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
      }
    }
)

  export default connect(null,mapDispatchToProps)(WorkItem);

