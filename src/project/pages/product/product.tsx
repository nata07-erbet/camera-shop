import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { Rate } from '../../rate/rate';
import { Review } from '../../components/review/review';
import { SimilarProductList } from '../../components/similar-product-list/similar-product-list';
import { api } from '../../services/services';
import { TCamera, TReview } from '../../types/product.types'
import { ReqRoutes } from '../../const/const';
import { BtnUp } from '../../components/btn-up/btn-up';
import { PopUpAddReview } from '../../components/pop-up/pop-up-add-review';
import { PopUpAddToBasket } from '../../components/pop-up/pop-up-add-to-basket';

function Product() {
  const params = useParams();
  const cameraId = params.id;
  console.log(cameraId);

  const [camera, setCamera] = useState<TCamera | null>(null);
  const [similarProducts, setSimilarProducts] = useState<TCamera[]>([]);
  const [reviews, setReviews] = useState<TReview[]>([]);
  const [isShowPopUpAddReview, setIsShowPopUpAddReview] = useState(false);


  useEffect(() => {
    api.get(`${ReqRoutes.Cameras}/${ReqRoutes.CameraId}`)
      .then((response) => setCamera(response.data));

    api.get(`${ReqRoutes.Cameras}/${ReqRoutes.CameraId}/${ReqRoutes.Similar}`)
      .then((response) => setSimilarProducts(response.data));

    api.get(`${ReqRoutes.Cameras}/${ReqRoutes.CameraId}/${ReqRoutes.Reviews}`)
      .then((response) => setReviews(response.data));

  }, []);

  return (
    <div className="wrapper">
      <Header />
      <main>
        {camera && (
          <div className="page-content">
            <Breadcrumbs />
            <div className="page-content__section">
              <section className="product">
                <div className="container">
                  <div className="product__img">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet={camera.previewImgWebp}
                      />
                      <img
                        src={camera.previewImg}
                        srcSet={camera.previewImg2x}
                        width={560}
                        height={480}
                        alt={camera.name}
                      />
                    </picture>
                  </div>
                  <div className="product__content">
                    <h1 className="title title--h3">{camera.name}</h1>
                    <Rate />
                    <p className="product__price">
                      <span className="visually-hidden">Цена:</span>{camera.price} ₽
                    </p>
                    <button className="btn btn--purple" type="button">
                      <svg width={24} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-add-basket" />
                      </svg>
                      Добавить в корзину
                    </button>
                    <div className="tabs product__tabs">
                      <div className="tabs__controls product__tabs-controls">
                        <button className="tabs__control" type="button">
                          Характеристики
                        </button>
                        <button className="tabs__control is-active" type="button">
                          Описание
                        </button>
                      </div>
                      <div className="tabs__content">
                        <div className="tabs__element">
                          <ul className="product__tabs-list">
                            <li className="item-list">
                              <span className="item-list__title">Артикул:</span>
                              <p className="item-list__text"> DA4IU67AD5</p>
                            </li>
                            <li className="item-list">
                              <span className="item-list__title">Категория:</span>
                              <p className="item-list__text">Видеокамера</p>
                            </li>
                            <li className="item-list">
                              <span className="item-list__title">Тип камеры:</span>
                              <p className="item-list__text">Коллекционная</p>
                            </li>
                            <li className="item-list">
                              <span className="item-list__title">Уровень:</span>
                              <p className="item-list__text">Любительский</p>
                            </li>
                          </ul>
                        </div>
                        <div className="tabs__element is-active">
                          <div className="product__tabs-text">
                            <p>
                              Немецкий концерн BRW разработал видеокамеру Das Auge IV
                              в&nbsp;начале 80-х годов, однако она до&nbsp;сих пор
                              пользуется популярностью среди коллекционеров
                              и&nbsp;яростных почитателей старинной техники.
                            </p>
                            <p>
                              Вы&nbsp;тоже можете прикоснуться к&nbsp;волшебству
                              аналоговой съёмки, заказав этот чудо-аппарат. Кто знает,
                              может с&nbsp;Das Auge IV&nbsp;начнётся ваш путь
                              к&nbsp;наградам всех престижных кинофестивалей.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="page-content__section">
              <section className="product-similar">
                <div className="container">
                  <h2 className="title title--h3">Похожие товары</h2>
                  <div className="product-similar__slider">
                    {similarProducts && (
                      <>
                        <SimilarProductList similarProducts={similarProducts} />
                        <button
                          className="slider-controls slider-controls--prev"
                          type="button"
                          aria-label="Предыдущий слайд"
                          disabled
                        >
                          <svg width={7} height={12} aria-hidden="true">
                            <use xlinkHref="#icon-arrow" />
                          </svg>
                        </button>
                        <button
                          className="slider-controls slider-controls--next"
                          type="button"
                          aria-label="Следующий слайд"
                        >
                          <svg width={7} height={12} aria-hidden="true">
                            <use xlinkHref="#icon-arrow" />
                          </svg>
                        </button>
                      </>
                    )}

                  </div>
                </div>
              </section>
            </div>
            <div className="page-content__section">
              {reviews && <Review reviews={reviews} />}

            </div>
          </div>
        )}

      </main>
      <BtnUp />
      <PopUpAddReview isShowPopUpAddReview={isShowPopUpAddReview} />
      {camera && (
        <PopUpAddToBasket
          isShowPopUpAddToBasket={true}
          product={camera}
        />
      )}

      <Footer />
    </div>
  );
}

export { Product };

