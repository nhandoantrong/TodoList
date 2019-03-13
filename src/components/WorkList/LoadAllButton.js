import React, { Component } from 'react';
import {connect} from 'react-redux';
import {renderChangedList} from '../../redux/actions/renderList'
import {noPriorityOrSort} from '../../redux/actions/filterOrSort'
class LoadAllButton extends Component {

    onClick = ()=>{
        this.props.renderChangedList(this.props.data);
        this.props.noPriorityOrSort();
    }

    render() {
        return (
            <button className="btn btn-primary"
            onClick={this.onClick}
            >Show All Tasks</button>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.dataReducer
})
const mapDispatchToProps = (dispatch) =>({
    renderChangedList : (list) =>{
        dispatch(renderChangedList(list));
    },
    noPriorityOrSort : () =>{
        dispatch(noPriorityOrSort());
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(LoadAllButton);