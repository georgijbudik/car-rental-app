import Header from 'components/Header/Header';
import MainContainer from 'components/MainContainer/MainContainer';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <MainContainer>
      <Header />
      <main>
        <Outlet />
      </main>
    </MainContainer>
  );
};

export default SharedLayout;
