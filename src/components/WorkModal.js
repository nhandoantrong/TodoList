import React, { Component } from 'react';
import {connect} from 'react-redux';
class WorkModal extends Component {


    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            work: {
                id: '',
                name: "",
                labelArr: [],
                priority: '',
                memberIDArr: [],
                status: '',
                description: ""
            },
            isAdd:this.props.isAdd
        };
    }


    onchange = (event)=>{
        this.setState({
            work: {
                ...this.state.work,
                [event.target.name]:event.target.value
            }
        })
    }

    componentWillReceiveProps = (nextProps)=>{
        if (this.props.isAdd !== nextProps.isAdd)
            this.setState({
                isAdd:nextProps.isAdd,
            })
        if (this.props.work!== nextProps.work)
        {
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
                                <h4 className="modal-title">{this.state.isAdd ? 'Thêm Công Việc' : 'Sửa Công Việc'}</h4>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                >
                                    ×
          </button>
                            </div>
                            {/* Modal body */}
                            <form>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="taskName">Tên công việc:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="taskName"
                                        name='name'
                                        onchange={this.onchange}
                                        value={this.state.work.name}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Mô tả:</label>
                                    <textarea
                                        className="form-control"
                                        rows={2}
                                        id="description"
                                        name='description'
                                        onchange={this.onchange}
                                        value={this.state.work.description}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="priority">Độ ưu tiên:</label>
                                    <select className="form-control" id="priority"
                                        name='priority'
                                        onchange={this.onchange}
                                        value={this.state.work.priority}
                                    >
                                        <option>Thấp</option>
                                        <option>Trung bình</option>
                                        <option>Cao</option>
                                    </select>
                                </div>
                                <label>Người thực hiện:</label>
                                <br />
                                <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            defaultValue
                                        />Nghĩa Văn
            </label>
                                </div>
                                <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            defaultValue
                                        />Minh Tuấn
            </label>
                                </div>
                                <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            defaultValue
                                        />Trung Hiếu
            </label>
                                </div>
                                <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            defaultValue
                                        />Tấn Khải
            </label>
                                </div>
                                <br />
                                <br />
                                <label >Nhãn:</label>
                                <br />
                                <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            defaultValue
                                        />Frontend
            </label>
                                </div>
                                <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            defaultValue
                                        />Backend
            </label>
                                </div>
                                <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            defaultValue
                                        />API
            </label>
                                </div>
                                <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            defaultValue
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
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                    data-dismiss="modal"
                                >
                                    {
                                        this.state.isAdd ? 'Add' : 'Edit' }
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

const mapStateToProps=(state)=>({
    isAdd: state.isAddReducer,
    work : state.editedWorkReducer,
})
export default connect(mapStateToProps)(WorkModal);