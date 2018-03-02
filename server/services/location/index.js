const dsWebService = require("../../datasource/service");

class Store {
  constructor() {
    this.dsWenService = dsWebService;
  }
  getStores() {
    return this.dsWenService.Get("/location");
  }
}
module.exports = new Store();
