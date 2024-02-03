import Filters from 'components/Filters/Filters';
import { CatalogContainer, LoadMoreButton } from './Catalog.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalog, fetchMakes } from 'redux_/catalog/catalogOperations';
import CardList from 'components/CardList/CardList';
import Title from 'components/Title/Title';
import { selectIsLoading } from 'redux_/catalog/catalogSelectors';
import Loader from 'components/Loader/Loader';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const isLoading = useSelector(selectIsLoading);

  console.log(page);

  const onLoadMore = () => {
    dispatch(fetchCatalog(page + 1));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatalog({ page }));
    dispatch(fetchMakes());
  }, [dispatch, page]);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Title>Our catalog</Title>
      </div>
      <CatalogContainer>
        <Filters />
      </CatalogContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <CardList />
          <LoadMoreButton type="button" onClick={onLoadMore} hidden={isLoading}>
            Load more
          </LoadMoreButton>
        </div>
      )}
    </>
  );
};

export default Catalog;
