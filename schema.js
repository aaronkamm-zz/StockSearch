const {
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema
} = require('graphql');

const fetch = require("node-fetch");

const authKey = 'PRSMKROIIZA42ZG7';

//For latest information of quote
const LatestQuote = new GraphQLObjectType({
    name: "Latest",
    fields: () => ({
        symbol: {type: GraphQLString},
        price: {type: GraphQLString},
        high: {type: GraphQLString},
        low: {type: GraphQLString},
        latestDay: {type: GraphQLString}
    })
})

//Root Query -- Resolvers for data

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        latest: {
            type: LatestQuote,
            args: {
                quote: {type: GraphQLString}
            },
            resolve(parent, args){
                return fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${args.quote}&apikey=${authKey}`)
                    .then(res => res.json())
                    .then(
                       (obj) => {
                            const newObj = {};
                            newObj.symbol = obj["Global Quote"]["01. symbol"],
                            newObj.price = obj["Global Quote"]["05. price"],
                            newObj.high = obj["Global Quote"]["03. high"],
                            newObj.low = obj["Global Quote"]["04. low"],
                            newObj.latestDay = obj["Global Quote"]["07. latest trading day"]
                            return newObj;
                        }
                    )
            }
        }
    })
});

module.exports = new GraphQLSchema({
    query: RootQuery
});