import React from "react";

import { About } from "./container/About";
import Header from "./container/Header";
import Experience from "./container/Experience";
import Footer from "./container/Footer";
import Projects from "./container/Projects";
import Skills from "./container/Skills";
import { NavBar } from "./components/NavBar";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <NavBar></NavBar>
      <Header></Header>
      <Projects></Projects>
      <Skills></Skills>
      <Experience></Experience>
      <Footer></Footer>
      {/* <Routes>
                <Route path = "/resume" element = { <Resume/>} exact />
                </Routes>  */}
    </div>
  );
};

export default App;
