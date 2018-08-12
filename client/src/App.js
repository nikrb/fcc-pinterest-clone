import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from 'react-router-dom';
import './App.css';
import HomePage from './containers/HomePage';
import MyWall from './containers/MyWall';
import AuthorWall from './containers/AuthorWall';
import Auth from './modules/Auth';
import {MessageBox} from "./components/Message";

export default class App extends Component {
  state = {
    is_logged_in: false
  }
  componentWillMount = () => {
    Auth.checkUser()
    .then( (response)=>{
      console.log( "fetch auth/user result:", response);
      if( response.success){
        Auth.authUser( response.user);
      } else {
        Auth.deauthUser();
      }
      this.setState( {is_logged_in: Auth.isUserAuthenticated()});
    })
    .catch( (err) => {
      console.error( "fetch auth/user failed:", err);
      Auth.deauthUser();
      this.setState( {is_logged_in: false});
    });
  };
  logout = () => {
    Auth.deauthUser();
    Auth.logout()
    .then( (response) => {
      console.log( "auth logout response:", response);
    })
    .catch( (err) => {
      console.error( "auth logout failed:", err);
    });
    this.setState( {is_logged_in: false});
  };

  render() {
    const login_twitter_url = process.env.NODE_ENV === "production"?
      "/auth/login/twitter":"http://127.0.0.1:5000/auth/login/twitter";
    console.log('twitter login url:', login_twitter_url);
    const username = Auth.getUser().name;
    const right_margin = {
      marginRight: "10px"
    };
    return (
      <Router>
        <div>
          <MessageBox />
          <div className="nav">
            <ul>
              <div className="nav-box">
                <li><NavLink to="/" exact>Home</NavLink></li>
                {Auth.isUserAuthenticated()?
                  <li><NavLink to="/mywall" exact>My Wall</NavLink></li>
                  :""
                }
              </div>
              <div className="nav-box">
                { Auth.isUserAuthenticated()?
                    <div className="nav-box">
                      <li style={right_margin}>{username?`Hi ${username}`:""}</li>
                      <li><a onClick={this.logout}>Logout</a></li>
                    </div>
                  :
                  <li>
                    <a href={login_twitter_url} >
                      Login
                    </a>
                  </li>
                }
              </div>
            </ul>
          </div>

          <hr/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <AuthRoute path="/mywall" component={MyWall} />
            <Route path="/authorwall" component={AuthorWall} />
            <Route path="*" render={props => <Redirect to='/' {...props} /> } />
          </Switch>
        </div>
      </Router>
    );
  }
};

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
