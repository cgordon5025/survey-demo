const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User{
    _id:ID,
    username: String,
    email:String,
    password:String,
    responses: Response

}

type Response{
    _id:ID,
    username:String
    answers:[Boolean]
    createdAt:String
}

type Query{
    Users:[User]!
    user(userId:ID!):User
}

type Mutation{
    addUser(username:String!, email:String!, password:String!):User

    addResponse(userId:ID!, answer:[Boolean]!):User
    deleteResponse(userId:ID!, responseId:ID!):User
}`;

module.exports = typeDefs