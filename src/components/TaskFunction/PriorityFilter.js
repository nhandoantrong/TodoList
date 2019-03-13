import React, { Component } from 'react';
import {connect} from "react-redux";
import {priorityFilterChosen} from '../../redux/actions/filterOrSort'
class PriorityFilter extends Component {


    constructor(props) {
        super(props);
        this.state= {
            value: "-1"
        }
    }
    

    onChange=(event)=>{
        this.props.filterData(this.props.type,event.target.value)
        this.setState({
            value:event.target.value
        },()=>{
            if (this.state.value!=="-1")
            {
                this.props.priorityFilterChosen();
            }
        })
    }
    componentWillReceiveProps(nextProps){
        if(!nextProps.isChosen)
            this.setState({
                value:"-1"
            })
    }
    render() {
        return (
            <div className="form-group text-left">
                <label>Priority</label>
                <select className="form-control font-weight-bold" onChange={this.onChange} value={this.state.value}>
                    <option className=""  value="-1">Choose Priority</option>
                    <option className="text-info font-weight-bold"
                    value={parseInt(2)}
                    >
                        Low
              </option>
                    <option className="text-success font-weight-bold"
                    value={parseInt(3)}
                    
                    >
                        Medium
              </option>
                    <option className="text-danger font-weight-bold"
                    value={parseInt(1)}
                    >
                        High
              </option>
                </select>
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
    isChosen : state.filterOrSortReducer.priorityChosen,
})

const mapDispatchToProps = (dispatch) =>({
    priorityFilterChosen: () =>{
        dispatch(priorityFilterChosen());
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(PriorityFilter);