import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Layout from '../../components/Layout/Layout';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <Header />
      <Layout className={css.layout}>
        <Hero />
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;
