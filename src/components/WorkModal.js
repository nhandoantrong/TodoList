import React, { Component } from 'react';
import { connect } from 'react-redux';
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
            isAdd: this.props.isAdd
        };
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addWork(this.state.work);
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
                [event.target.name]: event.target.value
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
                            <form onSubmit={this.onSubmit}>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="taskName">Tên công việc:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="taskName"
                                            name='name'
                                            onChange={this.onchange}
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
                                            onChange={this.onchange}
                                            value={this.state.work.description}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="priority">Độ ưu tiên:</label>
                                        <select className="form-control" id="priority"
                                            name='priority'
                                            onChange={this.onchange}
                                            value={this.state.work.priority}
                                        >
                                            <option value="2" >Thấp</option>
                                            <option value="3">Trung bình</option>
                                            <option value="1">Cao</option>
                                        </select>
                                    </div>
                                    <label>Người thực hiện:</label>
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
                                    <label >Nhãn:</label>
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
export default connect(mapStateToProps)(WorkModal);