import data from "../data/data.json";

function getTags() {
  const tags = [];
  for (const item of data.events) {
    tags.push(item.tags);
  }
  const flattened = [...new Set([].concat(...tags))];
  return flattened;
}

function getEventsForTags(tags) {
  const parsedTags = tags.map((tag) => tag.toUpperCase());

  const copy_data = [...data.events];

  const dataWithHits = copy_data.map((event) => ({ ...event, hits: 0 }));

  const dataWithCount = dataWithHits.map((event) => {
    let count = event.hits;
    event.tags.forEach((eventTag) => {
      if (parsedTags.includes(eventTag.toUpperCase())) {
        count = count + 1;
      }
    });
    return {
      ...event,
      hits: count,
    };
  });

  return dataWithCount.sort((a,b) => b.hits - a.hits);
}

export { getEventsForTags, getTags };
