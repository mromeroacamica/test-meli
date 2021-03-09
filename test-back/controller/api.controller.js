const requestServices = require("../services/meli.services");

exports.search = (req, res, next) => {
  const query = req.query.q;
  requestServices
    .search(query)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
};

exports.items = (req, res, next) => {
  const id = req.params.id;
  requestServices
    .item(id)
    .then((item) => {
      res.json(item);
    })
    .catch(next);
};
