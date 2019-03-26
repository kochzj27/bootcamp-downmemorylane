import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className='navbar'>
        <Link to='/todo'><h3 className='link'>Todo List App</h3></Link>
        <Link to='/counter'><h3 className='link'>Counter App</h3></Link>
      </div>
    )
  }
}

export default Navbar;