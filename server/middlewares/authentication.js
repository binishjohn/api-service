const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  const secret = req.app.get("jwt_token");
  const response = {};
  if (token) {
    jwt.verify(token, secret, (err, decoded) => {
      if (!err) {
        /** authenticated successfully.
        You could to more validation on the expiray time and date.
        * */
        next();
      } else {
        return res.json({
          success: false,
          message:
            "Failed to authenticate request identity. Token expired or invalid access attempt. Please login with valid username and password"
        });
      }
      return undefined;
    });
  } else {
    response.status = 403;
    response.error = "no token provided to access the API";
    response.data = "";
    return res.status(response.status).send(response);
  }
  return undefined; // Expected to return a value at the end of arrow function
};
module.exports = authentication;

