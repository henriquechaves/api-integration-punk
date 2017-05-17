import config from '../../server/config';

function entries(id) {
  let entries = [];
  for (var k = 1; k <= config.ITEMS_PER_PAGE; k++) {
    entries.push({
      id: k,
      name: `Item Name ${k}`,
      tagline: `Item TagLine ${k}`,
      description: `Item description ${k}`,
      image_url: `item_image_url${k}.png`,
    });
  }

  let result;
  if (id) {
    let res = [];
    res.push(entries[id-1])
    return res;
  }
  return entries;
}

export default function callApi(param = 0, isSearch = 0, page = 1, perpage = config.ITEMS_PER_PAGE) {
  const id = parseInt(param, 10);
  const item = ((typeof id === 'number') && id) ? id : 0;

  return Promise.resolve(entries(item));
}
