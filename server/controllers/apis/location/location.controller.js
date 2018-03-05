const locationService = require("../../../services/location/index");

class Location {
  constructor() {
    this.service = locationService;
  }
  getLocation() {
    return new Promise((resolve, reject) => {
      this.service
        .getLocation()
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
module.exports = Location;
