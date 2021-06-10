import axios from 'axios';

function createItems() {
  return axios.request({
    method: 'post',
    url: 'http://fakestoreapi.com/products',
  });
}
export default createItems;
