import React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Resume from "./components/pages/Resume";
import Projects from "./components/pages/Projects";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
                    <div>
                        <Link className="brand" to="/React-Portfolio">Haymanot Wolde</Link>
                    </div>
                    <div>
                      <Link to="/projects">Projects</Link>
                    </div>
                    <div>
                      <Link to="/resume">Resume
                      </Link>
                    </div>
        </header>
        <main>
          <Route exact path='/React-Portfolio' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/resume' component={Resume} />
        </main>
        <footer className="row center">
            Copyright © H.W @ 2020
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
