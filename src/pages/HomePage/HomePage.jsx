import { useRef } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Layout from '../../components/Layout/Layout';
import css from './HomePage.module.css';
import FloorPlan from '../../components/FloorPlan/FloorPlan';
import { statsAtom } from '../../state';
import { useAtom } from 'jotai';

const HomePage = () => {
  const floorPlanRef = useRef(null);
  const [stats] = useAtom(statsAtom);

  const scrollToFloorPlan = () => {
    if (floorPlanRef.current) {
      floorPlanRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <div className={css.wrapper}>
        <Layout className={css.layout}>
          <Hero scrollToFloorPlan={scrollToFloorPlan} />
        </Layout>
      </div>
      <Layout className={css.layout}>
        {stats.totalGuests !== null && (
          <div className={css.stats}>
            <p>Current guests: {stats.currentGuests}</p>
            <p>Total guests: {stats.totalGuests}</p>
          </div>
        )}
        <FloorPlan className={css.floorPlan} ref={floorPlanRef} />
      </Layout>
      <Footer />
    </>
  );
};

export default HomePage;
