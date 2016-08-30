import React, { Component } from 'react';
import LabelBarItem from './LabelBarItem';
import './LabelBar.css';

class LabelBar extends Component {

    componentDidMount() {
        this.props.actions.requestLoadLabels();
    }

    handleAllLabelClick() {
        this.props.actions.filterNotesWithLabel();
        this.props.actions.setCurrentLabelFilter(undefined);
        document.body.style.backgroundColor = '#e8e8e8';
    }

    render() {
        var labels = this.props.labels.map((label) => {
            return (
                <LabelBarItem label={ label } 
                              key={ label.id } 
                              actions={ this.props.actions }   
                />
            );
        });

        return (
            <div className="label-bar">
                { labels }
                <div className="label-bar__item" onClick={ this.handleAllLabelClick.bind(this) }>
                    All
                </div>  
            </div>
        );
    }
    
}

export default LabelBar;