import React, { Component } from 'react';
import "../App.css";
import axios from 'axios';

class Products extends Component {

    state = {
        data : []
    }

// DATA
  componentDidMount() {
    axios.get(`http://localhost:3000/api/v1/products`)
      .then((response) => {
        this.setState({data: response.data})
      })
  }

  render() {
    return (
      <div className="">
        <h1 className="App jumbotron"> Products </h1>
            {
                this.state.data.map((item, index) => {
                    return (
                        <div key={index} className="products">
                            <a className="btn btn-primary"> 
                            <h3 className= "col-xs-3">
                                { item.name } 
                            </h3>
                            </a>
                        </div>
                    )
                })
            }
            <div className="">
              <button className="btn btn-success"> Add Products </button>
            </div>
      </div>
    );
  }
}

export default Products;
