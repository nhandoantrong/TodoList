import React, { Component } from 'react';
class LabelFilter extends Component {
  
  render() {
    return (
      <div className="filter filter--label">
        <ul className="list-unstyled text-left">
          Label
            <li className="py-1 display-5 lead" 
              style={{cursor:"pointer"}} 
            onClick={this.props.filterData.bind(this,this.props.type,"Frontend")}>
              <i className="fa fa-circle mr-2" />Frontend
            </li>
            <li className="py-1 display-5 lead"
             style={{cursor:"pointer"}} 
             onClick={this.props.filterData.bind(this,this.props.type,"Backend")}>
              <i className="fa fa-circle mr-2" />Backend
            </li>
            <li className="py-1 display-5 lead"
            style={{cursor:"pointer"}} 
            onClick={this.props.filterData.bind(this,this.props.type,"API")}>
              <i className="fa fa-circle mr-2" />API
            </li>
            <li className="py-1 display-5 lead"
            style={{cursor:"pointer"}} 
            onClick={this.props.filterData.bind(this,this.props.type,"Issue")}>
              <i className="fa fa-circle mr-2" />Issue
            </li>
        </ul>
      </div>
    );
  }
}

export default LabelFilter;