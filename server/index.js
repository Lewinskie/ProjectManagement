const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
// const schema = require("/server/schema/schema")\
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const cors = require("cors");

//import graphqlHTTP from "express-graphql";
const { graphqlHTTP } = require("express-graphql");

//connect to mongoDB
connectDB();

//middleware
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
