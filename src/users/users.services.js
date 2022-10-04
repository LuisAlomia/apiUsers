const usersControllers = require("./users.controllers");

const getUsersServices = (req, resp) => {
  const data = usersControllers.getUsers();
  resp.status(200).json(data);
};

const getUserServices = (req, resp) => {
  const { id } = req.params;
  const data = usersControllers.getUser(id);

  if (data) {
    resp.status(200).json(data);
  } else {
    resp.status(404).json({ id, message: "Invalid data" });
  }
};

const createUsersServices = (req, resp) => {
  const { first_name, last_name, email, password, birthday } = req.body;

  if (first_name && last_name && email && password && birthday) {
    const data = usersControllers.createUsers(
      first_name,
      last_name,
      email,
      password,
      birthday
    );
    resp.status(201).json(data);
  } else {
    resp.status(400).json({ message: "Missing data" });
  }
};

module.exports = { getUserServices, getUsersServices, createUsersServices };
