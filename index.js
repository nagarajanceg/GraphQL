import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import resolvers from "./resolver";

const app = express();


app.get("/", (req, res) => {
    res.send("GraphQL is Amazing!");
});


const root = resolvers;

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true,
    })
);
app.listen(8080, () => {
    console.log("running server on port localhost:8080/graphql");
});
