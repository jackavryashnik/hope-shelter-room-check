import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';

const HomePage = ({ isLoggedIn }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Layout>
        <Hero />
      </Layout>
      <Footer />
    </>
  );
};

export default HomePage;
