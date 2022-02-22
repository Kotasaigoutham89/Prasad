

import React from "react";
import { Route, Routes } from 'react-router-dom';
import WorkGroups from "./WorkGroups";
import Home from "./Home"
import Curriculum from "./Curriculum"
import Academiccourse from "./Academiccourse";
import Academicprograms from "./Academicprograms";
import Appliedstudentlearning from "./Appliedstudentlearning";
import "./App.css";

const RoutesApp = () => {
  return (
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/WorkGroups" element={<WorkGroups/>}/>
        <Route path="/Curriculum" element={<Curriculum/>}/>
        <Route path="/Academiccourse"  element={<Academiccourse/>}/>
        <Route path="/Academicprograms" element={<Academicprograms/>}/>
        <Route path="/Appliedstudentlearning" element={<Appliedstudentlearning/>}/>
      </Routes>
  )
}
function App() {
  return (
    <>
      <RoutesApp/>
    </>

  );
}

export default App;
