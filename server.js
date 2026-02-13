require("dotenv").config();
const app = require("./app");
const { initDB } = require("./models");

const PORT = process.env.PORT || 5000;

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
