import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let upperCaseText = text.toUpperCase()
        setText(upperCaseText)
    }
    const handleLowerClick = () => {
        let lowerCaseText = text.toLowerCase()
        setText(lowerCaseText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <div className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</div>
                <div className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lowercase</div>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read this</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </>
    )
}
