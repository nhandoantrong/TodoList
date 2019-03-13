import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
            <div className="filter filter--progress">
                <ul className="list-unstyled text-left">
                    Status
                    <li className="py-1 display-5 lead"
                    onClick={this.props.filterData.bind(this,this.props.type,"1")}
                    >
                        <i className="fa fa-square-o mr-2"></i>Ongoing
                    </li>
                    <li className="py-1 display-5 lead"
                    onClick={this.props.filterData.bind(this,this.props.type,"2")}>
                        <i className="fa fa-check-square-o mr-2" />Finished
                     </li>
                    <li className="py-1 display-5 lead"
                    onClick={this.props.filterData.bind(this,this.props.type,"3")}>
                        <i className="fa fa-trash-o mr-2" />Terminated
                    </li>
                </ul>
            </div>
        );
    }
}

export default Filter;