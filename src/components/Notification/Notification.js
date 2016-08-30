import React, { Component } from 'react';
import classNames from 'classnames';
import './Notification.css';

class Notification extends Component {

    render() {
        var notificationClass = classNames({
            'notification': true,
            'notification__open': this.props.general.notification
        });

        return (
            <div className={ notificationClass }>{ this.props.general.notification }</div>
        );
    }

}

export default Notification;