const author = require("../author");

exports.search = (search) => {
  if (search.filters.length > 0) {
    return {
      author: {
        name: author.name,
        lastname: author.lastname,
      },
      //no estaba muy claro en la consigna que categorias se deseaban. Y no sabia si podia consultar.
      categories: search.filters[0].values[0].path_from_root.map((filter) => {
        return filter.name;
      }),
      items: search.results.map((result) => {
        return {
          id: result.id,
          title: result.title,
          price: {
            currency: result.currency_id,
            amount: result.price,
            decimals: 0,
          },
          picture: result.thumbnail,
          condition: result.condition,
          free_shipping: result.shipping.free_shipping,
        };
      }),
    };
  } else {
    return null;
  }
};

exports.item = (item) => {
  return {
    author: {
      name: author.name,
      lastname: author.lastname,
    },
    item: {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 00,
      },
      picture: item.pictures[0].url,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      sold_quantity: item.sold_quantity,
      description: item.description,
    },
  };
};
