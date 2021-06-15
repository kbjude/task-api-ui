import axios from 'axios';

function getItems() {
  return axios.request({
    method: 'get',
    url: 'http://localhost:3000/items',
  });
}
export default getItems;
