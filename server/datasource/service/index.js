const rp = require("request-promise");

class APIService {
  constructor() {
    this.token = "";
  }

  Authenticate() {
    this.token = `Bearer " + ${this.token}`;
    return this.token;
  }

  Get(endPoint) {
    return new Promise((resolve, reject) => {
      const options = {
        uri: endPoint,
        qs: {
          access_token: "xxxxx xxxxx" // -> uri + '?access_token=xxxxx%20xxxxx'
        },
        headers: {
          Authorization: this.token
        },
        json: true
      };

      rp(options)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

const API = new APIService();
module.exports = API;
