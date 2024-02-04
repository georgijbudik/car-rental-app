import Filters from 'components/Filters/Filters';
import {
  CatalogContainer,
  CatalogWrap,
  LoadMoreButton,
} from './Catalog.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalog, fetchMakes } from 'redux_/catalog/catalogOperations';
import CardList from 'components/CardList/CardList';
import Title from 'components/Title/Title';
import { selectAmount, selectIsLoading } from 'redux_/catalog/catalogSelectors';
import Loader from 'components/Loader/Loader';
import { clearCatalog } from 'redux_/catalog/catalogSlice';
import { clearFilter } from 'redux_/filter/filterSlice';
import { selectFilteredCatalog } from 'redux_/filter/filterSelectors';
import NotFound from 'components/NotFound/NotFound';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const amount = useSelector(selectAmount);
  const isLoading = useSelector(selectIsLoading);
  const filteredCatalog = useSelector(selectFilteredCatalog);
  const dispatch = useDispatch();

  useEffect(() => {
    if (page === 1) {
      dispatch(clearCatalog());
      dispatch(clearFilter());
    }

    dispatch(fetchCatalog({ page, limit: 12 }));
    dispatch(fetchMakes());
  }, [dispatch, page]);

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Title>Our catalog</Title>
      </div>
      <CatalogContainer>
        <Filters />
      </CatalogContainer>
      <CatalogWrap>
        {filteredCatalog.length > 0 && <CardList cars={filteredCatalog} />}
        {filteredCatalog.length === 0 && !isLoading && (
          <NotFound message={'Ooops, the list is empty'} />
        )}
        {amount < 32 && (
          <LoadMoreButton type="button" hidden={isLoading} onClick={onLoadMore}>
            Load more
          </LoadMoreButton>
        )}
        {isLoading && <Loader />}
      </CatalogWrap>
    </div>
  );
};

export default Catalog;
