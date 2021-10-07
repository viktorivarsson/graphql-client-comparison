const express = require('express');
const { graphqlHTTP } = require('express-graphql');
var cors = require('cors');
const { buildSchema } = require('graphql');

const PORT = 4000;

const state = {
  users: [
    {
      id: '1',
      name: 'John Doe',
      age: 22,
    },
    {
      id: '2',
      name: 'Jane Doe',
      age: 41,
    },
  ],
};

const schema = buildSchema(`
	type User {
		id: ID!
		name: String!
		age: Int!
	}

	type Viewer {
    id: ID!
    user(id: ID!): User
		users: [User!]!
	}

  type Query {
		viewer: Viewer!
  }

	type Mutation {
		updateUserName(userId: ID!, name: String!): User
	}
`);

const getUsers = () => state.users;
const getUserById = (userId) => getUsers().find((user) => user.id === userId);

const updateUserName = ({ userId, name }) => {
  state.users = state.users.map((user) => {
    if (user.id !== userId) {
      return user;
    }
    return {
      ...user,
      name,
    };
  });
  return getUserById(userId);
};

const viewer = {
  id: 'someViewerId',
  user: ({ id }) => getUserById(id),
  users: getUsers,
};

const rootValue = {
  viewer,
  updateUserName,
};

const app = express();
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  }),
);
app.listen(PORT);
console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);
