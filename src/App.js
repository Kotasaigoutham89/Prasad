

import React from "react";
import { Route, Routes, Router } from 'react-router-dom';
import WorkGroups from "./WorkGroups";
import Home from "./Home"
import "./App.css";

const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home}>
          <Home />
        </Route>
        <Route path="/WorkGroups" exact component={WorkGroups}>
          <WorkGroups />
        </Route>
      </Routes>
    </Router>
  )
}
function App() {
  return (
    <>
      <Home/>
    </>

  );
}

export default App;
