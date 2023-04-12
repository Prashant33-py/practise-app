import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        if (text.length > 0) {
            let upperCaseText = text.toUpperCase();
            setText(upperCaseText);
            props.showAlert("Converted to Upper Case", "success");
        } else {
            props.showAlert("Enter text to convert", "warning");
        }
    };
    const handleLowerClick = () => {
        if (text.length > 0) {
            let lowerCaseText = text.toLowerCase();
            setText(lowerCaseText);
            props.showAlert("Converted to Lower Case", "success");
        } else {
            props.showAlert("Enter text to convert", "warning");
        }
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState("");
    return (
        <>
            <div className={`container text-${props.mode === "light" ? "dark" : "light"}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control`} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <div className="btn btn-primary mx-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </div>
                <div className="btn btn-primary mx-1" onClick={handleLowerClick}>
                    Convert to Lowercase
                </div>
            </div>
            <div className={`container my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
                <h1>Your Text Summary</h1>
                <p>
                    {text.length > 0 ? text.split(" ").length : 0} words {text.length} characters
                </p>
                <p>{text.length > 0 ? 0.008 * text.split(" ").length : 0} minutes to read this</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter text to preview"}</p>
            </div>
        </>
    );
}
