// create server
// get ApolloServer
const {ApolloServer,gql}=require("apollo-server");
// type Query=>for fetch data
const typeDefs=gql`

type Query{
    # scalar type=>number string integer float Boolean
    #   !  =>  just can string can't null    
    hello:String!
    numberOfAnimals:Int
    price:Float
    isCool:Boolean
}
`;
const resolvers={
    Query:{
        hello:()=>{
            // we can return null or string
           return null
        },
        numberOfAnimals:()=>{
            return 55;
        },
        price:()=>{
            return 23444555.99
        },
        isCool:()=> false
    },
}

// create new server
// type defintion =>1-schma 2-resolve
const server=new ApolloServer({
  typeDefs,
resolvers,
});

// get url with listen
server.listen().then(({url})=>{
    console.log('server is ready at'+url);
})