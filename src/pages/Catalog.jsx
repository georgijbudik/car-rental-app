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
import {
  selectCatalog,
  selectIsLoading,
} from 'redux_/catalog/catalogSelectors';
import Loader from 'components/Loader/Loader';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const isLoading = useSelector(selectIsLoading);
  const catalog = useSelector(selectCatalog);

  const onLoadMore = () => {
    setPage(page + 1);
    dispatch(fetchCatalog({ page }));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatalog({ page }));
    dispatch(fetchMakes());
  }, [dispatch, page]);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Title>Our catalog</Title>
      </div>
      <CatalogContainer>
        <Filters />
      </CatalogContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <CatalogWrap>
          {catalog.length === 0 ? (
            <div>The list is empty</div>
          ) : (
            <>
              <CardList />
              <LoadMoreButton
                type="button"
                onClick={onLoadMore}
                hidden={isLoading}
              >
                Load more
              </LoadMoreButton>
            </>
          )}
        </CatalogWrap>
      )}
    </div>
  );
};

export default Catalog;
