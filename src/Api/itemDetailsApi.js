import axios from 'axios';
import { browserHistory } from 'react-router';
import resolveBaseUrl from '.';

const baseUrl = resolveBaseUrl();

class ItemDetailsAPI {
  static fetch(searchParams) {
    const {
      // isLoading = true,
      // error = '',
      hoursspent = '',
      minutes = '',
      description = '',
      itemId = '',
    } = searchParams;
    return axios.get(`${baseUrl}/api/itemdetails/search?hoursspent=${hoursspent}&minutes=${minutes}&description=${description}&item_id=${itemId}`);
  }

  static fetchItemdetail(id) {
    return axios.get(`${baseUrl}/api/itemdetails/${id}`);
  }

  static createItem(itemdetail) {
    return axios.post(`${baseUrl}/api/itemdetails`, itemdetail);
  }

q

static updateItemdetail(itemdetail) {
  browserHistory.push('/pathToRedirect');
  return axios.put(`${baseUrl}/api/itemdetails/${itemdetail.id}`, itemdetail);
}

static deleteItemdetail(id) {
  return axios.delete(`${baseUrl}/api/itemdetail/${id}`);
}
}

export default ItemDetailsAPI;
