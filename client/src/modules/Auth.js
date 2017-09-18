const authenticateUser = ( user) => {
  localStorage.setItem( '_id', user._id);
  localStorage.setItem( 'token', user.token);
  localStorage.setItem( 'name', user.name);
  localStorage.setItem( 'email', user.email);
};
const isUserAuthenticated = () => {
  return localStorage.getItem( 'token') !== null;
};
const deauthenticateUser = () => {
  localStorage.removeItem( '_id');
  localStorage.removeItem( 'token');
  localStorage.removeItem( 'name');
  localStorage.removeItem( 'email');
};
const get_id = () => {
  return localStorage.getItem( '_id');
};
const getToken = () => {
  return localStorage.getItem( 'token');
};
const getUsername = () => {
  return localStorage.getItem( 'name');
};
const getEmail = () => {
  return localStorage.getItem( 'email');
};

export default { authenticateUser, isUserAuthenticated, deauthenticateUser,
                  get_id, getToken, getUsername, getEmail};
