import React, { Component } from 'react';
import './Label.css';

class Label extends Component {

    handleLabelChange(e) {
        this.props.actions.labelChange(this.props.label.id, e.target.value);
    }

    render() {
        var labelColor = {
            background: this.props.label.color
        };

        return (
            <input onChange={ this.handleLabelChange.bind(this) }
                    className="label__item"
                    value={ this.props.label.name }
                    style={ labelColor }
            />
        );
    }
    
}

export default Label;