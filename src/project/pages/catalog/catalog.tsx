import { useState, useEffect } from 'react';
import { Header } from '../../components/header/header';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { Filter } from '../../components/filter/filter';
import { Sort } from '../../components/sort/sort';
import { Pagination } from '../../components/pagination/pagination';
import { Footer } from '../../components/footer/footer';
import { ProductList } from '../../components/product-list/product-list';
import { SliderSwiper } from '../../components/slider-swiper/slider-swiper';
import { api } from '../../services/services';
import { ReqRoutes } from '../../const/const';
import { TCamera, TPromo } from '../../types/product.types';
import { ModalAddToBasket } from '../../components/modal/modal-add-to-basket';
import { } from '../../components/pop-up/pop-up-add-to-basket';
import { PopUpAddToBasketSuccess } from '../../components/pop-up/pop-up-add-to-basket-success';
import { PopUpRemoveFromBasket } from '../../components/pop-up/pop-up-remove-from-basket';

function Catalog() {

  const [cameras, setCameras] = useState<TCamera[]>([]);
  const [promo, setPromo] = useState<TPromo[]>([]);
  const [selectId, setSelectId] = useState<TCamera['id'] | null>(null);
  const [isShowPopUpAddToBasket, setIsShowPopUpAddToBasket] = useState(false);
  const [isShowPopUpAddToBasketSuccess, setIsShowPopUpAddToBasketSuccess] = useState(false);
  const [isShowPopUpRemoveFromBasket, setIsShowPopUpRemoveFromBasket] = useState(false);
  const handleClickClosePopUp = () => {
    setIsShowPopUpAddToBasket((prevState) => !prevState);
  };

  const handleButtonBuyClick = (productId: TCamera['id']) => {
    setSelectId(productId);
    setIsShowPopUpAddToBasket(true);
  };

  useEffect(() => {
    api
      .get<TCamera[]>(`${ReqRoutes.Cameras}`)
      .then((response) => setCameras(response.data));

    api
      .get<TPromo[]>(`${ReqRoutes.Promo}`)
      .then((response) => setPromo(response.data));

  }, []);

  const productById = cameras.find((camera) => camera.id === selectId);
  console.log(productById);


  return (
    <div className="wrapper">
      <Header />
      <main>
        <SliderSwiper promo={promo} />
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
                  {cameras && <ProductList
                    getCameras={cameras}
                    onButtonBuyClick={handleButtonBuyClick}
                  />}
                  <Pagination />
                </div>
              </div>
            </div>
          </section>
        </div>
        {productById && (
          <ModalAddToBasket
            isShowPopUp={isShowPopUpAddToBasket}
            onClickClosePopUp={handleClickClosePopUp}
            product={productById}
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
