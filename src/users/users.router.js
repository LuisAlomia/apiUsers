const router = require("express").Router();
const usersServices = require("./users.services");

router
  .get("/users", usersServices.getUsersServices)
  .get("/users/:id", usersServices.getUserServices)
  .post("/users", usersServices.createUsersServices);

module.exports = router;
