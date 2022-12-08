const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { json } = require("body-parser");

// https://dev.to/danielstai/how-to-build-an-express-rest-api-for-a-simple-blog-app-2m6k
dotenv.config();

const app = express();
const port = process.env.port;
console.log(`port: ${port}`);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/blogs", require("./routes/blogRoutes"));

app.listen(port, () => {
  console.log(`Server running om http://localhost: ${process.env.PORT}`);
});
