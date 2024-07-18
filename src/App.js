import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";
import Solutions from "./components/Solutions";
import Compliance from "./components/Compliance";
import Security from "./components/Security";
import Integration from "./components/Integration";
import Insights from "./components/Insights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/security" element={<Security />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
