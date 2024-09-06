import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Catalog } from '../pages/catalog/catalog';
import { Product } from '../pages/product/product';
import { Basket } from '../pages/basket/basket';
import { NotFoundPage } from '../pages/404/404';
import { AppRoutes } from '../const/const';

const router = createBrowserRouter([
  {
    path: `${AppRoutes.Cameras}`,
    element: <Catalog />
  },
  {
    path: `${AppRoutes.CameraById}`,
    element: <Product />
  },
  {
    path: `${AppRoutes.Basket}`,
    element: <Basket />
  },
  {
    path: '/*',
    element: <NotFoundPage />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export { App };
