import React, { Component } from 'react'; import {Router
    , Stack
    , Scene} from 'react-native-router-flux';
    import Login from '../Sign_up&Sign_in/Login'; import Signup from '../Sign_up&Sign_in/Signup';
    export default class Routes extends Component { render() {
    return (
    <Router barButtonIconStyle ={styles.barButtonIconStyle} hideNavBar={false} navigationBarStyle={{backgroundColor: '#b51271',}} titleStyle={{color: '#ffffff',}}
    >
    <Stack key="root">
    <Scene key="login" component={Login} title="Login Page"/>
    <Scene key="signup" component={Signup} title="Register
    here"/>
    </Stack>
    </Router>
    )
    }
    }
    const styles = { barButtonIconStyle: {
    tintColor: '#ffffff'
    }
    }