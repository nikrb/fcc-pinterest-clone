import {checkStatus, parseJSON} from '../modules/util';

function postSignup( payload){
  return fetch( '/auth/signup', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( payload)
  })
  .then( checkStatus)
  .then( parseJSON);
}

function postLogin(payload){
  return fetch( '/auth/login', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( payload)
  })
  .then( checkStatus)
  .then( parseJSON);
}

function postChangePassword( payload){
  console.log( "postchange password payload:", payload);
  return fetch( '/auth/change', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( payload)
  })
  .then( checkStatus)
  .then( parseJSON);
}

const Actions = { postSignup, postLogin, postChangePassword};
export default Actions;
