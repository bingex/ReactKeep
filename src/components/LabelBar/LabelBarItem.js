import React, { Component } from 'react';

class LabelBarItem extends Component {

    handleLabelClick() {
        this.props.actions.filterNotesWithLabel(this.props.label.name);
        this.props.actions.setCurrentLabelFilter(this.props.label.name);
        document.body.style.backgroundColor = this.props.label.color;
    }

    render() {
        var labelColor = {
            background: this.props.label.color
        };

        return (
            <div className="label-bar__item" 
                 onClick={ this.handleLabelClick.bind(this) }
                 style={ labelColor }
            >
                { this.props.label.name }
            </div>
        );
    }
    
}

export default LabelBarItem;