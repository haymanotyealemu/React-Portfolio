import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Resume from "./components/pages/Resume";
import Projects from "./components/pages/Projects";
import Footer from "./components/Footer";

import "./App.css";
function App() {
  return (
    <>
    <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
        <Footer />
    </Router>
    </>
  );
}

export default App;
