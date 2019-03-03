import React, { Component } from 'react';

class Label extends Component {

    getColor= (labelName)=>{
        switch (labelName){
            case 'frontend':{
                return '#389E0D'
            }
            case 'backend':{
                return '#722ED1'

            }
            case 'api':{
                return '#13C2C2'

            }
            case 'issue':{
                return '#CF1322'
            }
            default:{
                return 'black'
            }
        }
    }

    render() {
        let {labelName}=this.props;
        return (
            <i
            className="fa fa-circle"
            style={{ color: this.getColor(labelName.toLowerCase()) }}/>
        );
    }
}

export default Label;