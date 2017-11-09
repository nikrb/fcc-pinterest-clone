import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from 'react-router-dom';
import './App.css';
import HomePage from './containers/HomePage';
import MyWall from './containers/MyWall';
import Auth from './modules/Auth';

export default class App extends Component {
  componentWillMount = () => {
    Auth.checkUser()
    .then( (response)=>{
      console.log( "fetch auth/user result:", response);
      if( response.success){
        Auth.authUser( response.user);
      } else {
        Auth.deauthUser();
      }
    })
    .catch( (err) => {
      console.error( "fetch auth/user failed:", err);
      Auth.deauthUser();
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
  };
  // FIXME: this is horrible right?
  login = ( user) => {
    // this.setState( {is_logged_in: true, user: {name: user.name, email: user.email}});
  };

  render() {
    const username = Auth.getUser().name;
    const right_margin = {
      marginRight: "10px"
    };
    return (
      <Router>
        <div>
          <div className="nav">
            <ul>
              <div className="nav-box">
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/mywall" exact>My Wall</NavLink></li>
              </div>
              <div className="nav-box">
                { Auth.isUserAuthenticated()?
                    <div className="nav-box">
                      <li style={right_margin}>{username?`Hi ${username}`:""}</li>
                      <li><a onClick={this.logout}>Logout</a></li>
                    </div>
                  :
                  <li>
                    <a href="https://knik-fcc-pclone.herokuapp.com/auth/login/twitter" >
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
          </Switch>
        </div>
      </Router>
    );
    // FIXME: seems this isn't intercepting the /auth/login/twitter route
    // don't forget to put it back in!
    // <Route path="*" render={props => <Redirect to='/' {...props} /> } />
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
