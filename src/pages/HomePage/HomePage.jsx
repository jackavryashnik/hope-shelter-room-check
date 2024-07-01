import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Layout from '../../components/Layout/Layout';
import Room15 from '../../components/rooms/Room15/Room15';
import css from './HomePage.module.css';

const HomePage = ({ isLoggedIn }) => {
  return (
    <div className={css.wrapper}>
      <Header isLoggedIn={isLoggedIn} />
      <Layout className={css.layout}>
        <Hero />
        <Room15/>
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;
