import React from "react";
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import MainLayout from "./Layout/MainLayout";
import Projects from "./Components/Projects/Projects";
import SoftwareCategories from "./Components/SoftwareCategories/SoftwareCategories";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="softwareCategories" element={<SoftwareCategories />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
