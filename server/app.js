const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://norbis:test123@cluster0-cedhx.mongodb.net/test?retryWrites=true&w=majority");
mongoose.connection.once("open", () => {
    console.log("conected to database");
});

app.use("/graphql",graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("now listening for request on port 4000");
});