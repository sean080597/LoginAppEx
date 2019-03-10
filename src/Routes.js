import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Users from './pages/Users';
import Profile from './pages/Profile';

export default class Routes extends Component {
  render() {
    return (
        <Router>
            <Stack key="root" hideNavBar={true}>
                <Scene key="login" component={Login} title="Login" initial={true}/>
                <Scene key="signup" component={Signup} title="Signup"/>
                <Scene key="users" component={Users} title="Users"/>
                <Scene key="profile" component={Profile} title="Profile"/>
            </Stack>
        </Router>
    )
  }
}
