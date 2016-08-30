import React, { Component } from 'react';
import Label from '../Label/Label';
import './LabelBox.css';

class LabelBox extends Component {

    componentDidMount() {
        this.props.actions.requestLoadLabels();
    }

    handleAddLabel() {
        this.props.actions.addLabel();
    }

    render() {
        var labels = this.props.labels.map((label) => {
            return (
                <Label label={ label } 
                       key={ label.id } 
                       actions={ this.props.actions }   
                />
            );
        });

        return(
            <div className="wrapper">
                <div className="label__btn" onClick={ this.handleAddLabel.bind(this) }>ADD NEW</div>
                { labels }
            </div>
        );
    }
    
}

export default LabelBox;