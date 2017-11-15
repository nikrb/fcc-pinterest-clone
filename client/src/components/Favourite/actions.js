import {checkStatus, parseJSON} from "../../modules/util";

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
