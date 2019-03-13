import React, { Component } from 'react';
import {connect} from 'react-redux';
import {renderChangedList} from '../../redux/actions/renderList'
import {toEnglishString} from '../../modelsAndSomeFunctions/VienameseHandle'

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state={
            keyword:"",
        }
    }
    searchData= (keyword) =>{
        let newData= this.props.data.filter(work=>{
            let name= toEnglishString( work.name.toLowerCase());
            return name.indexOf(keyword)!==-1
        })
        this.props.renderChangedList(newData)
    }
    onChange = (event) =>{
        this.setState({
            keyword : event.target.value
        },()=>{
            this.searchData(this.state.keyword.trim().toLowerCase())
        })
    }
    render() {
        return (
            <input
                          type="text"
                          className="form-control"
                          placeholder="Find Tasks"
                          name="keyword"
                         value ={this.state.keyword}
                          onChange={this.onChange}/>
        );
    }
}

const mapStateToProps = (state) =>({
    data:state.dataReducer
})
const mapDispatchToProps= (dispatch) =>({
    renderChangedList : (workList) =>{
        dispatch(renderChangedList(workList))
    }
})
export default connect(mapStateToProps,mapDispatchToProps) (SearchBar);