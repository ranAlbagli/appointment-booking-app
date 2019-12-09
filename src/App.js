import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import classes from './App.css';
import Availability from './containers/Availability/Availability'
import Types from './containers/Types/Types'
import GetAppointments from './containers/GetAppointments/GetAppointments'
import BookedAppointments from './containers/BookedAppointments/BookedAppointments'
import Header from './components/Header/Header'





class App extends Component {
  render() {
    let route = (
      <Switch>
        <Route path="/" exact component={Availability} />
        <Route path="/Types" exact component={Types} />
        <Route path="/GetAppointments" exact component={GetAppointments} />
        <Route path="/BookedAppointments" exact component={BookedAppointments} />
        <Redirect to="/" />
      </Switch>
    )
    return (
      <div className={classes.App}>
        <Header/>
        {route}
      </div>
    );
  }
}

export default App;
