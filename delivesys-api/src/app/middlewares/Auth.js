const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return res.status(401).send("No token provided");
    }
    const parts = authorization.split(" ");

    if (parts.length !== 2) {
      return res.status(401).send("Token error");
    }
    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      return res.status(401).send("Token malformatted");
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).send("Token invalid");
      }

      req.userId = decoded.userId;
      return next();
    });
  } catch (error) {
    return res.status(401).send("Token error");
  }
};
