import React, { Component } from 'react';
import "../../App.css";
import axios from 'axios';

class Landingpage extends Component {
    state = {
        data : []
    }
// DATA
  componentDidMount() {
    axios.get(`http://localhost:3000/api/v1/shops`)
      .then(res => {
        this.setState({ data: res.data });
      })
  }
  render() {
    return (
      <div className="">
        <h1 className="jumbotron"> Shopify App </h1>

            <div className="row">
                <div className="">
                    <a href="https://github.com/sehmim/ShopifyTest"><img className="ror col-md-4 col-xs-offset-1" src="https://devstickers.com/assets/img/pro/6uc0.png"></img></a>
                    <img className="ror col-md-4" src="http://pluspng.com/img-png/a-plus-logo-vector-png-free-vector-plus-icon-png-560.png"></img>
                    <a href="https://github.com/sehmim/ShopifyTest-React"><img  className="ror col-md-4"src="https://logosrated.net/wp-content/uploads/parser/React-Logo-1.png"></img></a>
                </div>

            </div>
      </div>
    );
  }
}

export default Landingpage;
