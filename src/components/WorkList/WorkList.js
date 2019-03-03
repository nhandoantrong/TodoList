import React, { Component } from 'react';
import WorkItem from './WorkItem';

class WorkList extends Component {

    renderWorkItem = (data) =>{
        return data.map((workItem, key)=>{
            return <WorkItem item={workItem} key={key} index={key} />
        })
    }

    render() {
        let {data} = this.props;
        return (

            <div className="col-md-9 px-0">
                <div className="container-fluid px-0">
                  <div className="row header header--right d-flex align-items-center mx-0">
                    <div className="col-md-6">
                      <div className=" d-flex justify-content-between">
                        <h3 className="text-left ml-2 ">
                          Danh sách công việc
                </h3>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group text-left my-0">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Tìm kiếm công việc"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Công việc</th>
                        <th className="text-center">Nhãn</th>
                        <th className="text-center">Độ ưu tiên</th>
                        <th className="text-center">Người thực hiện</th>
                        <th className="text-center">Xử lý</th>
                        <th className="text-center">Tình trạng</th>
                      </tr>
                    </thead>
                    <tbody>
                        {this.renderWorkItem(data)}
                    </tbody>
                  </table>
                </div>
              </div>

        );
    }
}

export default WorkList;