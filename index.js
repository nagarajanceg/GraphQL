import express  from "express";
import { graphqlHTTP } from "express-graphql";
import schema from './schema';

const app = express()

app.get("/",(req,res)=>{
    res.send("GraphQL is Amazing!")
});

const root = {
    product : () =>{
        
        return{
            "id":"123443",
            "name": "widget",
            "description": "Beautiful widget to use in your garden",
            "price": 23.99,
            "soldout": false,
            "stores": [
                {
                    store:"San Jose"
                },
                {
                    store: "SF"
                }
            ]
        }
    }
};

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue:root,
    graphiql: true
}))
app.listen(8080,()=>{
    console.log("running server on port localhost:8080/graphql");
})