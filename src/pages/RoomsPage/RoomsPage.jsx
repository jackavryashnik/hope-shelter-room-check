import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';

const RoomsPage = ({ isLoggedIn }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Layout>Rooms page</Layout>
    </>
  );
};

export default RoomsPage;
