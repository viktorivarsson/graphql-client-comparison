import { gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import { UserList_viewer } from './__generated__/UserList_viewer';

export const USER_LIST_FRAGMENTS = {
  viewer: gql`
    fragment UserList_viewer on Viewer {
      id
      users {
        id
        name
      }
    }
  `,
};

type Props = {
  viewer: UserList_viewer;
};

export const UserList = (props: Props) => {
  return (
    <ul>
      {props.viewer.users.map((user) => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};
