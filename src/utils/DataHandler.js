import data from '../data/data.json';

function getTags() {
  const tags = [];
  for (const item of data) {
    tags.push(item.tags);
  };
  const flattened = [...new Set([].concat(...tags))];
  return flattened;
};

export {
  getTags
};