import React from "react";

export default function Alert(props) {
    console.log(props.alert);
    return (
        props.alert && (
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong className="m-0">{props.alert.message}</strong>
            </div>
        )
    );
}
