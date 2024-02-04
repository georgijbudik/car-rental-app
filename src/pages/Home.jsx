import Title from 'components/Title/Title';
import {
  HomeContainer,
  HomeDescription,
  HomeDescriptionWrap,
  HomeImg,
  HomeSubTitle,
  HomeWrap,
  ServiceItem,
  ServicesList,
} from './Home.styled';
import heroImg from '../images/home-car-picture.jpg';
import Footer from 'components/Footer/Footer';
const Home = () => {
  return (
    <>
      <HomeContainer>
        <Title>Welcome to Car Rental app!</Title>
        <HomeWrap>
          <HomeImg src={heroImg} alt="Blue car" />
          <HomeDescriptionWrap>
            <HomeSubTitle>
              Explore the World with amazing{' '}
              <span style={{ color: 'rgba(52, 112, 255, 1)' }}>cars</span>
            </HomeSubTitle>

            <HomeDescription>
              Find the perfect car for your journey. Whether it's a road trip, a
              weekend getaway, or a daily commute, our fleet of top-notch cars
              is ready for you. Discover the joy of seamless car rental and
              start your adventure today.
            </HomeDescription>
            <ServicesList>
              <ServiceItem>🚗 Wide Range of Cars</ServiceItem>
              <ServiceItem>🔀 Flexible Rental Options</ServiceItem>
              <ServiceItem>🕒 24/7 Customer Support</ServiceItem>
              <ServiceItem>🌐 Easy Online Booking</ServiceItem>
            </ServicesList>
          </HomeDescriptionWrap>
        </HomeWrap>
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Home;
