import React, { Component } from 'react';

import axios from 'axios';

class Shops extends Component {

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
      <div className="">
        <h1 className="App jumbotron"> Shops </h1>
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
              <button className="btn btn-success"> Add Shops </button>
            </div>
      </div>
    );
  }
}

export default Shops;
