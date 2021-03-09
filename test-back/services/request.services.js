const https = require("https");
const http = require("http");

module.exports = (options, modelar) => {
  const protocol = options.protocol == "http" ? http : https;
  delete options.protocol;
  return new Promise((resolve, reject) => {
    protocol
      .request(options, (response) => {
        let result = "";
        response.on("data", (chunk) => {
          result += chunk;
        });

        response.on("end", () => {
          result = JSON.parse(result);
          if (response.statusCode === 200) {
            if (modelar) {
              result = modelar(result);
            }
            resolve(result);
          } else {
            reject(result);
          }
        });
      })
      .on("error", function (err) {
        reject(err);
      })
      .end();
  });
};
