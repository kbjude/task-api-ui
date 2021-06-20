import axios from 'axios';

function createItems() {
  return axios.getState({
    method: 'post',
    url: 'http://localhost:3000/items',
  });
}
export default createItems;
