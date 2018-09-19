import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import axios from "axios";

// PAGES
import Shops from "./pages/Shops";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Landingpage from "./pages/components/Landingpage";

class RouteComponent extends Component {
  state = {
      data : []
  }

  // DATA
  componentDidMount() {
  axios.get(`http://localhost:3000/api/v1/shops`)
    .then((response) => {
      this.setState({data: response.data})
    })
  }
  render() {    
    return (
    <Router>
      <div>

        <nav className="navbar navbar-default">
          <div className="container container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/"> Home </a>
              <a className="navbar-brand" href="/products"> Products </a>
              <a className="navbar-brand" href="/shops"> Shops </a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="/orders"><span className="glyphicon glyphicon-shopping-cart"></span> Orders </a></li>
              </ul>
            </div>
          </div>
      </nav>
        <Route exact path="/" component={ Landingpage }/>
        <Route path="/shops" component={ Shops }/>
        <Route path="/products" component={ Products }/>
        <Route path="/orders" component={ Orders }/>
      </div>
    </Router>
    );
  }
}
export default RouteComponent;


