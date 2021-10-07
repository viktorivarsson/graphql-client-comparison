import { gql, useQuery } from '@apollo/client';
import { UserList, USER_LIST_FRAGMENTS } from '../components/UserList';
import { HomeQuery } from './__generated__/HomeQuery';

const QUERY = gql`
  query HomeQuery {
    viewer {
      id
      ...UserList_viewer
    }
  }
  ${USER_LIST_FRAGMENTS.viewer}
`;

const Home = () => {
  const { data } = useQuery<HomeQuery>(QUERY, {});

  return (
    <div>
      <div>Look at dem users</div>
      {data && <UserList viewer={data.viewer} />}
    </div>
  );
};

export default Home;
