import React, { Component } from 'react';

import axios from 'axios';

class Orders extends Component {

    state = {
        data : null
    }

// DATA
  componentDidMount() {
    axios.get(`http://localhost:3000/api/v1/shops/:id/`)
      .then((response) => {
        this.setState({data: response.data.items})
      })
  }

  render() {
    return (
      <div className="App">
        <h1> Orders </h1>




            <div className="">
              <button className="btn btn-success"> Add Orders </button>
            </div>
      </div>
    );
  }
}

export default Orders;
