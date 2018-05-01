import axios from 'axios';
const ROOT_URL='http://localhost:8080/cards';
const config={headers: {
  'Access-Control-Allow-Origin':'http://localhost:8080',
   'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
   'Content-Type': 'application/json'
}}

export const FETCH_CARDS ='FETCH_CARDS';
export function fetchCards() {
   const URL = `${ROOT_URL}`;
  const REQUEST = axios.get(URL,config);
    return {
        type:FETCH_CARDS,
        payload:REQUEST
    }
}

export const ADD_POST ='ADD_POST';
export function postInfo(data) {
  const REQUEST =axios.post('http://localhost:8080/apply',data);
    return {
        type:ADD_POST,
        payload:REQUEST
    }
}
