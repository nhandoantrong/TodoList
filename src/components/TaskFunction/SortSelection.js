import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sortChosen} from "../../redux/actions/filterOrSort"
import {toEnglishString} from '../../modelsAndSomeFunctions/VienameseHandle'
class SortSelection extends Component {


    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    
    

    _ = require('lodash');
    sortAscending= (data) =>{
        let newData=this._.sortBy(data, [function(element) {return toEnglishString(element.name.toLowerCase() )}]);
        console.log (newData);
        return newData;
    }
    sortDescending= (data) =>{
        let newData=this.sortAscending(data);
        newData=newData.reverse();
        return newData
    }

    onChange=(event)=>{
        if (event.target.value==="ascending"){
            this.props.sortData(this.sortAscending(this.props.data))
        }
        else if (event.target.value==="descending")
        {
            this.props.sortData(this.sortDescending(this.props.data))
        }
        this.setState ({
            value: event.target.value,
        },()=>{
            if (this.state.value!=='')
                this.props.sortChosen();
        })
    }


    componentWillReceiveProps(nextProps){
        if(!nextProps.isChosen)
            this.setState({
                value:""
            })
    }

    render() {
        return (
            <div className="form-group text-left">
            <label>Sort Task</label>
            <select className="form-control font-weight-bold" onChange={this.onChange} value={this.state.value}>
                <option value="">Choose order</option>
              <option value="ascending" className="font-weight-bold">Ascending</option>
              <option value="descending" className="font-weight-bold">Descending</option>
            </select>
          </div>
        );
    }
}

const mapStateToProps = (state) =>({
    isChosen : state.filterOrSortReducer.sortChosen,
})

const mapDispatchToProps = (dispatch) =>({
    sortChosen: () =>{
        dispatch(sortChosen());
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(SortSelection);