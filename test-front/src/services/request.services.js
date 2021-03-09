const RequestServices = {
  search: async function (query) {
    const url = `http://localhost:4000/api/items?q=${query}`;
    try {
      const results = await fetch(url);
      const resultsJSON = results.json();
      return resultsJSON;
    } catch (err) {
      console.log(err);
    }
  },
  item: async function (itemId) {
    const url = `http://localhost:4000/api/items/${itemId}`;
    try {
      const results = await fetch(url);
      const resultsJSON = results.json();
      return resultsJSON;
    } catch (err) {
      console.log(err);
    }
  },
};

export default RequestServices;
