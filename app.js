const express = require("express");
const usersRouter = require("./src/users/users.router");

const PORT = process.env.PORT || 9000;
const app = express();

app.use(express.json());
app.use("/", usersRouter);

app.listen(PORT, () => {
  console.log(`SERVER IN PORT: ${PORT}`);
});
