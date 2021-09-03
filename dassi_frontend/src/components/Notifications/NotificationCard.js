import React from 'react';

export default function Notification(props) {
    console.log(props)
    const myStyle = props.notifications
    return (
        <div className="my-2 card-outline">
            <div className="custom-card d-flex flex-row p-2">
                <div className="card-icon" style={myStyle}>
                </div>
                <div className="d-flex flex-column align-self-center mx-3">
                    <div className="custom-card-title">
                        {props.notifications.title}
                    </div>
                    <div className="custom-card-body">
                        {props.notifications.body}
                    </div>
                </div>
            </div>
        </div>
    )
}
