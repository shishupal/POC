import axios from 'axios';
//const API_KEY = '7ab5fa59510947f1744420e969074836';
const ROOT_URL='http://localhost:3000/db';
export const FETCH_CARDS ='FETCH_CARDS';
export function fetchCards() {
   const URL = `${ROOT_URL}`;
  const REQUEST = axios.get(URL);
    return {
        type:FETCH_CARDS,
        payload:REQUEST
    }
}
