import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Page from "./Pages/Page";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Page title="Home Page" />} />
                <Route path="/about" element={<Page title="About Page" />} />
                <Route path="/contact" element={<Page title="Contact Page" />} />
            </Routes>
        </Router>
    );
};

export default App;
