import React from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
export default function Notification(props) {
    const  icons = [
        <ArrowRightAltIcon></ArrowRightAltIcon>,
        <KeyboardBackspaceIcon></KeyboardBackspaceIcon>,
        <QueryBuilderIcon></QueryBuilderIcon>,
        <AddCircleIcon></AddCircleIcon>,
        <CheckCircleIcon></CheckCircleIcon>,
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#15202B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.2398 7.75993C16.7977 8.31717 17.2402 8.9789 17.5422 9.70729C17.8441 10.4357 17.9995 11.2164 17.9995 12.0049C17.9995 12.7934 17.8441 13.5742 17.5422 14.3026C17.2402 15.031 16.7977 15.6927 16.2398 16.2499M7.75982 16.2399C7.20196 15.6827 6.75941 15.021 6.45746 14.2926C6.15551 13.5642 6.0001 12.7834 6.0001 11.9949C6.0001 11.2064 6.15551 10.4257 6.45746 9.69729C6.75941 8.9689 7.20196 8.30717 7.75982 7.74993M19.0698 4.92993C20.9445 6.80521 21.9977 9.34829 21.9977 11.9999C21.9977 14.6516 20.9445 17.1947 19.0698 19.0699M4.92982 19.0699C3.05511 17.1947 2.00195 14.6516 2.00195 11.9999C2.00195 9.34829 3.05511 6.80521 4.92982 4.92993" stroke="#15202B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2898 3.85996L1.81978 18C1.64514 18.3024 1.55274 18.6453 1.55177 18.9945C1.55079 19.3437 1.64127 19.6871 1.8142 19.9905C1.98714 20.2939 2.2365 20.5467 2.53748 20.7238C2.83847 20.9009 3.18058 20.9961 3.52978 21H20.4698C20.819 20.9961 21.1611 20.9009 21.4621 20.7238C21.763 20.5467 22.0124 20.2939 22.1853 19.9905C22.3583 19.6871 22.4488 19.3437 22.4478 18.9945C22.4468 18.6453 22.3544 18.3024 22.1798 18L13.7098 3.85996C13.5315 3.56607 13.2805 3.32308 12.981 3.15444C12.6814 2.98581 12.3435 2.89722 11.9998 2.89722C11.656 2.89722 11.3181 2.98581 11.0186 3.15444C10.7191 3.32308 10.468 3.56607 10.2898 3.85996V3.85996Z" stroke="#15202B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 9V13" stroke="#15202B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 17H12.0092" stroke="#15202B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>


    ]
    console.log(props)
    const myStyle = props.notifications[props.index].style
    return (
        <div className="my-2 card-outline">
            <div className="custom-card d-flex flex-row p-2">
                <div className="card-icon d-flex flex-row justify-content-center align-items-center" style={myStyle}>
                    {icons[props.index]}
                </div>
                <div className="d-flex flex-column align-self-center mx-3">
                    <div className="custom-card-title">
                        {props.notifications[props.index].title}
                    </div>
                    <div className="custom-card-body">
                        {props.notifications[props.index].body}
                    </div>
                </div>
            </div>
        </div>
    );
}