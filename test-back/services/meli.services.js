const request = require("./request.services");
const modelar = require("./modelar.services");

const options = {
  method: "GET",
  headers: { "Content-type": "application/json" },
};

exports.search = (query) => {
  options.hostname = "api.mercadolibre.com";
  options.path = `/sites/MLA/search?limit=4&q=${encodeURIComponent(query)}`;
  return request(options, modelar.search);
};

exports.item = (id) => {
  options.hostname = "api.mercadolibre.com";
  options.path = `/items/${id}`;
  const Item = request(options);

  options.path = `/items/${id}/description`;
  const ItemDescription = request(options);

  return new Promise((resolve, reject) => {
    Promise.all([Item, ItemDescription])
      .then((data) => {
        const item = data[0];
        const itemDescription = data[1].text || data[1].plain_text;
        item.description = itemDescription;
        resolve(modelar.item(item));
      })
      .catch((err) => {
        reject(err);
      });
  });
};
