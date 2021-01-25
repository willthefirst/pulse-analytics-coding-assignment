export default function uniqueBy(data, key) {
  const indexMap = {};
  const result = [];

  data.forEach((object, index) => {
    const current = object[key];

    if (current in indexMap) {
      // If this is a duplicate, replace the old value in `result`
      const prevIndex = indexMap[current];
      result[prevIndex] = object;
    } else {
      indexMap[current] = index;
      result.push(object);
    }
  });

  return result;
}
