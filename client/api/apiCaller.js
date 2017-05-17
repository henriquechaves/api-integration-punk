import axios from 'axios';
import config from '../../server/config';

export const API_URL = 'https://api.punkapi.com/v2/beers';

export default function callApi(param = 0, isSearch = 0, page = 1, perpage = config.ITEMS_PER_PAGE) {
  let url;
  const filter = `page=${page}&per_page=${perpage}`;

  if (isSearch) {
    const searchStr = param.replace(' ', '_');

    url = `${API_URL}?beer_name=${searchStr}&${filter}`;
    if (searchStr === '') {
      url = `${API_URL}?${filter}`;
    }
  } else {
    const id = parseInt(param, 10);

    url = typeof id === 'number' && id
      ? `${API_URL}/${id}`
      : `${API_URL}?${filter}`;
  }

  return axios.get(url)
  .then(res => res.data)
  .catch(err => [err]);
}
