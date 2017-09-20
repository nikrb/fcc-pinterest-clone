import Auth from '../modules/Auth';
import {checkStatus, parseJSON} from '../modules/util';

export function getAllImages( payload){
  return fetch( '/apo/pimages', {
    method: 'post',
    body: JSON.stringify( payload)
  })
  .then( checkStatus)
  .then( parseJSON);
}

export function getUserImages( payload){
  return fetch( '/api/userimages', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    body: JSON.stringify( payload)
  })
  .then( checkStatus)
  .then( parseJSON);
}

export function createNewImage( payload){
  return fetch( '/api/userimage', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    body: JSON.stringify( payload)
  })
  .then( checkStatus)
  .then( parseJSON);
}
export function deleteImage( payload){
  return fetch( '/api/userimage', {
    method: 'delete',
    headers: {
      'Accept': "application/json",
      'Content-Type': 'application/json',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    body: JSON.stringify( payload)
  })
  .then( checkStatus)
  .then( parseJSON);
}
