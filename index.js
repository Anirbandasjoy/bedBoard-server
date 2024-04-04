const app = require("./app");
const { PORT } = require("./helper/secret");

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
