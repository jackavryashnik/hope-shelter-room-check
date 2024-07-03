import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/Modal/Modal';
import css from './HomePage.module.css';

const HomePage = ({ isLoggedIn }) => {
  return (
    <div className={css.wrapper}>
      <Modal/>
      <Header isLoggedIn={isLoggedIn} />
      <Layout className={css.layout}>
        <Hero />
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;
