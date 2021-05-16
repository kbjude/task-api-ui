import axios from 'axios';
import resolveBaseUrl from '.';

const baseUrl = resolveBaseUrl();

class ItemAPI {
  static fetch(searchParams) {
    const {
      // isLoading = true,
      // error = '',
      name = '',
      descrption = '',
      // created_at = '',
      // updated_at = '',
    } = searchParams;
    return axios.get(`${baseUrl}/api/items/search?name=${name}&descrption=${descrption}`);
  }

  static fetchItem(id) {
    return axios.get(`${baseUrl}/api/items/${id}`);
  }

  static createItem(item) {
    return axios.post(`${baseUrl}/api/items`, item);
  }

q

static updateItem(item) {
  // browserHistory.push('/pathToRedirect');
  return axios.put(`${baseUrl}/api/items/${item.id}`, item);
}

static deleteItem(id) {
  return axios.delete(`${baseUrl}/api/item/${id}`);
}
}

export default ItemAPI;
