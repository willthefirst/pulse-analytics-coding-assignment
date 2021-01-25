export default function filterBy(data, searchTerm, keys) {
  const result = [];

  data.forEach((object) => {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];

      if (typeof object[key] !== 'string') {
        throw new Error('Invalid data: all values should be strings.');
      }

      const string = object[key].toLowerCase();

      if (string.includes(searchTerm)) {
        result.push(object);
        return;
      }
    }
  });

  return result;
}
