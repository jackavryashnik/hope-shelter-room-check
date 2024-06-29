import Header from '../components/Header/Header';

const HomePage = ({ isLoggedIn }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
    </>
  );
};

export default HomePage;
