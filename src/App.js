import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hotels from "./pages/Hotels";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/hotels">
          <Hotels />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Router>
    </div>
  );
}

export default App;
