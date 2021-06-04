import axios from 'axios';
import { useParams } from 'react-router-dom';

function getItems() {
  const { id } = useParams;

  return axios.request({
    method: 'get',
    url: `http://fakestoreapi.com/products/${id}`,
  });
}
export default getItems;
