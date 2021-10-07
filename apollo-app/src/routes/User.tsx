import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserQuery, UserQueryVariables } from './__generated__/UserQuery';

const QUERY = gql`
  query UserQuery($userId: ID!) {
    viewer {
      id
      user(id: $userId) {
        id
        name
        age
      }
    }
  }
`;

const User = () => {
  const params = useParams<{ userId: string }>();

  const { data } = useQuery<UserQuery, UserQueryVariables>(QUERY, {
    variables: {
      userId: params.userId,
    },
  });

  if (!data) {
    return null;
  }

  const { user } = data.viewer;

  if (!user) {
    return <div>No user</div>;
  }

  return (
    <div>
      <Link to="/">Home</Link>

      <dl>
        <dt>ID</dt>
        <dd>{user.id}</dd>
        <dt>Name</dt>
        <dd>{user.name}</dd>
        <dt>Age</dt>
        <dd>{user.age}</dd>
      </dl>
    </div>
  );
};

export default User;
