import { graphql, useFragment } from 'react-relay';
import { Link } from 'react-router-dom';
import { UserList_viewer$key } from './__generated__/UserList_viewer.graphql';

const fragment = graphql`
  fragment UserList_viewer on Viewer {
    users {
      id
      name
    }
  }
`;

type Props = {
  viewer: UserList_viewer$key;
};

export const UserList = (props: Props) => {
  const data = useFragment(fragment, props.viewer);

  return (
    <ul>
      {data.users.map((user) => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};
