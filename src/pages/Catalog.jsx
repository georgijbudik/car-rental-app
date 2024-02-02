import Filters from 'components/Filters/Filters';
import { CatalogContainer } from './Catalog.styled';
import { StyledTitle } from 'components/Title/Title.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCatalog } from 'redux_/catalog/catalogOperations';
import CardList from 'components/CardList/CardList';

const Catalog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <StyledTitle>Our catalog</StyledTitle>
      </div>
      <CatalogContainer>
        <Filters />
      </CatalogContainer>
      <CardList />
    </>
  );
};

export default Catalog;
