import { Catalog } from '../pages/catalog/catalog';
import { Product } from '../pages/product/product';
import { Basket } from '../pages/basket/basket';
import { NotFoundPage } from '../pages/404/404';

function App() {
  return (
    <>
      <Catalog />
      <Product />
      <Basket />
      <NotFoundPage />
    </>
  );
}

export { App };
