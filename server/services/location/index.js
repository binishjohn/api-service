const dsWebService = require("../../datasources/service");

class Location {
  constructor() {
    this.dsWenService = dsWebService;
  }
  getLocation() {
    return new Promise((resolve, reject) => {
      this.name = "Location A";
      resolve({ name: this.name });
    });
    // return this.dsWenService.Get("/location");
  }
}
module.exports = new Location();
