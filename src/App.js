import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hotels from "./pages/Hotels";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home isOpen={isOpen} toggle={toggle} />
        </Route>
        <Route path="/about">
          <About isOpen={isOpen} toggle={toggle} />
        </Route>
        <Route path="/hotels">
          <Hotels isOpen={isOpen} toggle={toggle} />
        </Route>
        <Route path="/contact">
          <Contact isOpen={isOpen} toggle={toggle} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
