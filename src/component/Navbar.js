import React from "react";
import "../component/navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "../App";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <Router>
            <Link to href="#">
              Portfo<span>lio.</span>
            </Link>
              <Switch>
                <Route path="/App">
                  <App />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
