import Filters from 'components/Filters/Filters';
import { CatalogContainer } from './Catalog.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCatalog } from 'redux_/catalog/catalogOperations';
import CardList from 'components/CardList/CardList';
import Title from 'components/Title/Title';

const Catalog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Title>Our catalog</Title>
      </div>
      <CatalogContainer>
        <Filters />
      </CatalogContainer>
      <CardList />
    </>
  );
};

export default Catalog;
