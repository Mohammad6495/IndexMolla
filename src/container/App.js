import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./Main/Main";
import ScrollUp from "../components/UI/ScrollUp/ScrollUp";

const App = () => {
  return (
    <Router>
      <ScrollUp/>
        <Routes>
            <Route path="/" element={<Main/>}/>
        </Routes>
    </Router>
  );
};

export default App;
