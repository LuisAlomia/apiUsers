const uuid = require("uuid");
const dataDB = require("../DB/dbUsers");

const getUsers = () => {
  const data = dataDB;
  return data;
};

const getUser = (id) => {
  const data = dataDB.find((user) => user.id === id);
  return data;
};

const createUsers = (first_name, last_name, email, password, birthday) => {
  const newUser = {
    id: uuid.v4(),
    first_name,
    last_name,
    email,
    password,
    birthday,
    is_active: true,
  };

  dataDB.push(newUser);

  return newUser;
};

module.exports = { getUser, getUsers, createUsers };
