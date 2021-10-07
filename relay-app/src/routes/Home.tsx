import { graphql, useLazyLoadQuery } from 'react-relay';
import { UserList } from '../components/UserList';
import { HomeQuery } from './__generated__/HomeQuery.graphql';

const QUERY = graphql`
  query HomeQuery {
    viewer {
      ...UserList_viewer
    }
  }
`;

const Home = () => {
  const { viewer } = useLazyLoadQuery<HomeQuery>(QUERY, {});

  return (
    <div>
      <div>Look at dem users</div>
      <UserList viewer={viewer} />
    </div>
  );
};

export default Home;
