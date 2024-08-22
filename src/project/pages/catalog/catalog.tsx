import { useState, useEffect } from 'react';
import { Header } from '../../components/header/header';
import { Banner } from '../../components/banner/banner';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { Filter } from '../../components/filter/filter';
import { Sort } from '../../components/sort/sort';
import { Pagination } from '../../components/pagination/pagination';
import { Footer } from '../../components/footer/footer';
import { ProductList } from '../../components/product-list/product-list';
import { api } from '../../services/services';
import { ReqRoutes } from '../../const/const';
import { TCamera } from '../../types/product.types';
import { PopUpAddToBasket } from '../../components/pop-up/pop-up-add-to-basket';
import { PopUpAddToBasketSuccess } from '../../components/pop-up/pop-up-add-to-basket-success';
import { CAMERA } from '../../mocks/mocks';
import { PopUpRemoveFromBasket } from '../../components/pop-up/pop-up-remove-from-basket';

function Catalog() {
  const [getCameras, setGetCameras] = useState<TCamera[]>([]);
  const [isShowPopUpAddToBasket, setIsShowPopUpAddToBasket] = useState(false);
  const [isShowPopUpAddToBasketSuccess, setIsShowPopUpAddToBasketSuccess] = useState(false);
  const [isShowPopUpRemoveFromBasket, setIsShowPopUpRemoveFromBasket] = useState(false);
  const product = CAMERA;


  useEffect(() => {
    api
      .get<TCamera[]>(`${ReqRoutes.Cameras}`)
      .then((response) => setGetCameras(response.data));
  }, []);


  return (
    <div className="wrapper">
      <Header />
      <main>
        <Banner />
        <div className="page-content">
          <Breadcrumbs />
          <section className="catalog">
            <div className="container">
              <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
              <div className="page-content__columns">
                <div className="catalog__aside">
                  <div className="catalog-filter">
                    <Filter />
                  </div>
                </div>
                <div className="catalog__content">
                  <div className="catalog-sort">
                    <Sort />
                  </div>
                  <ProductList getCameras={getCameras} />
                  <Pagination />
                </div>
              </div>
            </div>
          </section>
        </div>
        {product && (
          <PopUpAddToBasket
            isShowPopUpAddToBasket={isShowPopUpAddToBasket}
            product={product}
          />
        )}
        <PopUpAddToBasketSuccess
          isShowPopUpAddToBasketSuccess={isShowPopUpAddToBasketSuccess}
        />
        <PopUpRemoveFromBasket isShowPopUpRemoveFromBasket={isShowPopUpRemoveFromBasket} />
      </main>
      <Footer />
    </div>
  );
}

export { Catalog };
