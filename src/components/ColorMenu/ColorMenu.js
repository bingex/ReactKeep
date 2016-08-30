import React, { Component } from 'react';
import classNames from 'classnames';
import ClickOutHandler from 'react-onclickout';
import './ColorMenu.css';

class ColorMenu extends Component {

    onClickColorOut(e) {
        if (!this.props.note.chooseColorOpen) return;

        this.props.actions.openChooseColor(this.props.note.id, false);
    }

    handleChooseColorOpen() {
        this.props.actions.openChooseColor(this.props.note.id, true);
    }

    handleChooseColor(e) {
        this.props.actions.chooseColor(this.props.note.id, e.target.dataset.color);
    }

    render() {
        var chooseColorClass = classNames({
            'note__choose-color': true,
            'open': this.props.note.chooseColorOpen
        });

        return (
            <ClickOutHandler onClickOut={ this.onClickColorOut.bind(this) }>
                <div className="note__color-wheel" onClick={ this.handleChooseColorOpen.bind(this) }></div>
                <div className={ chooseColorClass } >
                    <div className="clr color-white" 
                         data-color="rgb(255, 255, 255)" 
                         onClick={ this.handleChooseColor.bind(this) }>
                    </div>
                    <div className="clr color-red" 
                         data-color="rgb(255, 138, 128)" 
                         onClick={ this.handleChooseColor.bind(this) }>
                    </div>
                    <div className="clr color-orange" 
                         data-color="rgb(255, 209, 128)" 
                         onClick={ this.handleChooseColor.bind(this) }>
                    </div>
                    <div className="clr color-yellow" 
                         data-color="rgb(255, 255, 141)" 
                         onClick={ this.handleChooseColor.bind(this) }>
                    </div>
                    <div className="clr color-gray" 
                         data-color="rgb(207, 216, 220)" 
                         onClick={ this.handleChooseColor.bind(this) }>
                    </div>
                    <div className="clr color-blue" 
                         data-color="rgb(128, 216, 255)" 
                         onClick={ this.handleChooseColor.bind(this) }>
                    </div>
                    <div className="clr color-lightblue" 
                         data-color="rgb(167, 255, 235)" 
                         onClick={ this.handleChooseColor.bind(this) }>
                    </div>
                    <div className="clr color-green" 
                         data-color="rgb(204, 255, 144)" 
                         onClick={ this.handleChooseColor.bind(this) }>
                    </div>
                </div>
            </ClickOutHandler>
        );
    }
    
}

export default ColorMenu;