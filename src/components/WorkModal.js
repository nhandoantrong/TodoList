import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addWork,editWork} from '../redux/actions/dataAction';
import {editRenderedList} from '../redux/actions/renderList'
class WorkModal extends Component {


    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            work: this.props.work,
            isAdd: this.props.isAdd
        };
    }

    inputOnClickHandle = (e) =>{
        console.log (e.type);
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.props.isAdd)
        {
            this.setState({
                work:{
                    ...this.state.work,
                    id: new Date().getTime()
                }
            },()=>{
                this.props.addWork(this.state.work);
                this.setState({
                    work: this.props.work,
                },()=>{
                    document.getElementById("hidePopUpBtn").click();
                })
            })

        }
        else 
        {
            this.props.editWork(this.state.work);
            this.props.editRenderedList(this.state.work);
            document.getElementById("hidePopUpBtn").click();

        }
    }

    checkBoxClickHandle = (event) => {
        if (event.target.checked) {
            let newArr = [...this.state.work[event.target.name], event.target.value];
            this.setState({
                work: {
                    ...this.state.work,
                    [event.target.name]: newArr
                }
            })
        }
        else {
            var newArr = [...this.state.work[event.target.name]];
            newArr = newArr.filter(item => {
                return item !== event.target.value;
            })
            this.setState({
                work: {
                    ...this.state.work,
                    [event.target.name]: newArr
                }
            })
        }
    }


    onchange = (event) => {
        this.setState({
            work: {
                ...this.state.work,
                [event.target.name]: event.target.name!=='priority'? event.target.value: parseInt(event.target.value)
            }
        })
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.props.isAdd !== nextProps.isAdd)
            this.setState({
                isAdd: nextProps.isAdd,
            })
        if (this.props.work !== nextProps.work) {
            this.setState({
                work: nextProps.work,
            })
        }
    }


    render() {

        return (
            <div>
                <div className="modal fade" id="modalTask">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">{this.state.isAdd ? 'Add Task' : 'Edit Task'}</h4>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                >
                                    ×
                                </button>
                            </div>
                            {/* Modal body */}
                            <form onSubmit={this.onSubmit}>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="taskName">Task Name:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="taskName"
                                            name='name'
                                            onChange={this.onchange}
                                            value={this.state.work.name}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description:</label>
                                        <textarea
                                            className="form-control"
                                            rows={2}
                                            id="description"
                                            name='description'
                                            onChange={this.onchange}
                                            value={this.state.work.description}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="priority">Priority:</label>
                                        <select className="form-control" id="priority"
                                            name='priority'
                                            onChange={this.onchange}
                                            value={this.state.work.priority }
                                        >
                                            <option value="2" >Low</option>
                                            <option value="3">Medium</option>
                                            <option value="1">High</option>
                                        </select>
                                    </div>
                                    <label>Excutioners:</label>
                                    <br />
                                    <div className="form-check-inline">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"

                                                name="memberIDArr"
                                                value='user_2'
                                                checked={(this.state.work.memberIDArr.indexOf("user_2") !== -1)}
                                                onChange={this.checkBoxClickHandle}
                                            />Nghĩa Văn
                                        </label>
                                    </div>
                                    <div className="form-check-inline">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"

                                                name="memberIDArr"
                                                value='user_3'
                                                checked={(this.state.work.memberIDArr.indexOf("user_3") !== -1)}
                                                onChange={this.checkBoxClickHandle}


                                            />Minh Tuấn
                                        </label>
                                    </div>
                                    <div className="form-check-inline">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"

                                                name="memberIDArr"
                                                value='user_4'
                                                checked={(this.state.work.memberIDArr.indexOf("user_4") !== -1)}

                                                onChange={this.checkBoxClickHandle}


                                            />Trung Hiếu
                                        </label>
                                    </div>
                                    <div className="form-check-inline">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"

                                                name="memberIDArr"
                                                value='user_5'
                                                checked={(this.state.work.memberIDArr.indexOf("user_5") !== -1)}

                                                onChange={this.checkBoxClickHandle}

                                            />Tấn Khải
                                        </label>
                                    </div>
                                    <br />
                                    <br />
                                    <label >Labels:</label>
                                    <br />
                                    <div className="form-check-inline">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                name="labelArr"
                                                value='Frontend'
                                                checked={(this.state.work.labelArr.indexOf("Frontend") !== -1)}
                                                onChange={this.checkBoxClickHandle}

                                            />Frontend
                                        </label>
                                    </div>
                                    <div className="form-check-inline">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                name="labelArr"
                                                value='Backend'
                                                checked={(this.state.work.labelArr.indexOf("Backend") !== -1)}
                                                onChange={this.checkBoxClickHandle}

                                            />Backend
                                        </label>
                                    </div>
                                    <div className="form-check-inline">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                name="labelArr"
                                                value='API'
                                                checked={(this.state.work.labelArr.indexOf("API") !== -1)}
                                                onChange={this.checkBoxClickHandle}

                                            />API
                                        </label>
                                    </div>
                                    <div className="form-check-inline">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                name="labelArr"
                                                value='Issue'
                                                checked={(this.state.work.labelArr.indexOf("Issue") !== -1)}
                                                onChange={this.checkBoxClickHandle}

                                            />Issue
                                        </label>
                                    </div>
                                </div>
                                {/* Modal footer */}
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        data-dismiss="modal"
                                        id="hidePopUpBtn"
                                    >
                                        Close
                                </button>
                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                    >
                                        {this.state.isAdd ? 'Add' : 'Edit'}
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    isAdd: state.isAddReducer,
    work: state.editedWorkReducer,
})

const mapDispatchToProps = (dispatch) =>({
    addWork: (work)=>{
        dispatch(addWork(work))
    },
    editWork: (work) =>{
        dispatch (editWork(work))
    },
    editRenderedList : (work) =>{
        dispatch (editRenderedList(work))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(WorkModal);