import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserQuery } from './__generated__/UserQuery.graphql';

const QUERY = graphql`
  query UserQuery($userId: ID!) {
    viewer {
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

  const { viewer } = useLazyLoadQuery<UserQuery>(QUERY, {
    userId: params.userId,
  });

  const { user } = viewer;

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
