import data from '../data/data.json';

function getTags() {
  const tags = [];
  for (const item of data.events) {
    tags.push(item.tags);
  };
  const flattened = [...new Set([].concat(...tags))];
  return flattened;
};

function getItemsForTags(tags) {
  const matchedItems = [];
  for (const tag of tags) {
    for (const item of data.events) {

      if (item.tags.includes(tag)) {
        matchedItems.push(item);
      }

    }
  }

  return matchedItems;
}

export {
  getItemsForTags,
  getTags
};