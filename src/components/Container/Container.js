import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Welcome from '../Welcome/Welcome';
import Counter from '../Counter/Counter';
import TaskApp from '../TaskApp/TaskApp';
import './Container.css'

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className='container'>
        <Header />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Welcome} />
          <Route path='/todo' component={TaskApp} />
          <Route path='/counter' component={Counter} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Container;