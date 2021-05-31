import axios from 'axios';

export function getItems() {
  return axios.request({
    method: 'get',
    url: 'http://fakestoreapi.com/products',
  });
}
