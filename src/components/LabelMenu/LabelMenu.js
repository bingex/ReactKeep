import React, { Component } from 'react';
import classNames from 'classnames';
import ClickOutHandler from 'react-onclickout';
import './LabelMenu.css';

class LabelMenu extends Component {

    onClickLabelOut(e) {
        if (!this.props.note.chooseLabelOpen) return;
        
        this.props.actions.openChooseLabel(this.props.note.id, false);
    }

    handleChooseLabelOpen() {
        this.props.actions.openChooseLabel(this.props.note.id, true);
    }

    handleChooseLabel(e) {
        this.props.actions.chooseLabel(this.props.note.id, e.target.innerHTML.trim());
        if (this.props.general.filterLabel) {
            this.props.actions.filterNotesWithLabel(this.props.general.filterLabel);
            this.props.actions.openChooseLabel(this.props.note.id, false);
        }
    }

    render() {
        var labels = this.props.labels.map((label) => {
            if (label.name === this.props.note.label) {
                return (
                    <div key={ label.id } className="lbl">
                        <div className="lbl-checked"></div>
                        { label.name }
                    </div>
                );
            }

            return (
                <div key={ label.id } className="lbl" onClick={ this.handleChooseLabel.bind(this) }>
                    { label.name }
                </div>
            );
        });

        var chooseLabelClass = classNames({
            'note__choose-label': true,
            'open': this.props.note.chooseLabelOpen
        });

        return (
            <ClickOutHandler onClickOut={ this.onClickLabelOut.bind(this) }>
                <div className="note__label" onClick={ this.handleChooseLabelOpen.bind(this) }></div>
                <div className={ chooseLabelClass } >
                   { labels }
                </div>
            </ClickOutHandler>
        );
    }

}

export default LabelMenu;