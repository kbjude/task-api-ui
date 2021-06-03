import axios from 'axios';

function getItems() {
  return axios.request({
    method: 'get',
    url: 'http://fakestoreapi.com/products',
  });
}
export default getItems;
