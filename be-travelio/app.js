const cors = require("cors");
let express = require("express");

let app = express();
const port = process.env.PORT || 3000;
const routes = require("./routes/index");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});