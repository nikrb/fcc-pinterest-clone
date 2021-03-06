import {checkStatus, parseJSON} from '../modules/util';

const checkUser = () => {
  return fetch( "/auth/user", {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache': 'no-cache'
    },
    credentials: 'same-origin'
  })
  .then( checkStatus)
  .then( parseJSON);
};

const logout = () => {
  return fetch( "/auth/logout")
  .then( checkStatus)
  .then( parseJSON);
};

const authUser = ( {_id, name}) => {
  localStorage.setItem( "user_id", _id);
  localStorage.setItem( "user_name", name);
};
const deauthUser = () => {
  localStorage.removeItem( "user_id");
  localStorage.removeItem( "user_name");
};
const isUserAuthenticated = () => {
  // FIXME: user auth
  const id = localStorage.getItem( 'user_id');
  return id?true:false;
};
const getUser = () => {
  const user = {};
  user._id = localStorage.getItem( "user_id");
  user.name = localStorage.getItem( "user_name");
  return user;
};

export default { checkUser, getUser, logout,
  authUser, deauthUser, isUserAuthenticated};
