import Header from 'components/Header/Header';
import MainContainer from 'components/MainContainer/MainContainer';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </main>
    </>
  );
};

export default SharedLayout;
