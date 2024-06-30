import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';

const HomePage = ({ isLoggedIn }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Layout>Home page</Layout>
    </>
  );
};

export default HomePage;
