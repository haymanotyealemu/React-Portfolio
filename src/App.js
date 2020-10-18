import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Resume from "./components/pages/Resume";
import Projects from "./components/pages/Projects";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/resume' component={Resume} />
          
        </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
