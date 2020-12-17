import data from '../data/data.json';

function getTags() {
  const tags = [];
  for (const item of data.events) {
    tags.push(item.tags);
  };
  const flattened = [...new Set([].concat(...tags))];
  return flattened;
};

function getEventsForTags(tags) {
  const copy_data = [...data.events];
  for (const tag of tags) {
    for (const item of copy_data) {
      item.hits = 0;
      for (const looptag of item.tags) {
        if (looptag.toLowerCase() === tag.toLowerCase()) {
          console.log(looptag);
          item.hits += 1;
        }
      }
 
    }
  }
  
  console.log("before", copy_data);
  const returnArray = copy_data.sort((a, b) => {

    let comparison = 0;
    if (a.hits < b.hits) {
      comparison = 1;
    } else if (a.hits > b.hits) {
      comparison = -1;
    }
    return comparison;
  });
  console.log("after", returnArray);
  return returnArray;
}

export {
  getEventsForTags,
  getTags
};