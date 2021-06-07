import axios from 'axios';
import { useParams } from 'react-router-dom';

function getItemDetails(id) {
  console.log(`API call, ${id}`);
  console.log({ id });
  console.log(useParams());

  return axios.request({
    method: 'get',
    url: `http://fakestoreapi.com/products/${id}`,
  });
}
export default getItemDetails;
