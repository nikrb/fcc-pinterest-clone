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
      'Cache': 'no-cache'
    },
    credentials: 'same-origin',
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
      "Cache": "no-cache"
    },
    credentials: "same-origin",
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
      "Cache": "no-cache"
    },
    credentials: "same-origin",
    body: JSON.stringify( payload)
  })
  .then( checkStatus)
  .then( parseJSON);
}

export function addFavourite( payload){
  return fetch( '/api/favourite', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Cache": "no-cache"
    },
    credentials: "same-origin",
    body: JSON.stringify( payload)
  })
  .then( checkStatus)
  .then( parseJSON);
}
