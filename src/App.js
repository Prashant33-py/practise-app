import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#212529";
            document.body.style.color = "white"
            showAlert("Dark mode has been enabled", "success");
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            document.body.style.color = "#212529"
            showAlert("Light mode has been enabled", "success");
        }
    };

    return (
        <>
            <Router>
                <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} showAlert={showAlert} />
                <div className="container my-3">
                    <Routes>
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/" element={<TextForm heading="Enter a text below you want to analyze" mode={mode} alert={alert} showAlert={showAlert} />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
