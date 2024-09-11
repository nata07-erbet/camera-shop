import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { Rate } from '../../rate/rate';
import { Review } from '../../components/review/review';
import { SimilarProductList } from '../../components/similar-product-list/similar-product-list';
import { api } from '../../services/services';
import { TCamera, TReview } from '../../types/product.types';
import { ReqRoutes } from '../../const/const';
import { BtnUp } from '../../components/btn-up/btn-up';
import { PopUpAddReview } from '../../components/pop-up/pop-up-add-review';
import { ModalReviewSuccess } from '../../components/modal/modal-review-success';
import { PopUpAddToBasket } from '../../components/pop-up/pop-up-add-to-basket';

function Product() {
  const [currentCamera, setCurrentCamera] = useState<TCamera | null>(null);
  const [similarProducts, setSimilarProducts] = useState<TCamera[]>([]);
  const [reviews, setReviews] = useState<TReview[]>([]);
  const { cameraId } = useParams<{ cameraId: string }>();

  const [isShowPopUpAddReview, setIsShowPopUpAddReview] = useState(true);
  const [isShowPopUpAddReviewSuccess, setIsShowPopUpAddReviewSuccess] = useState(false);
  const [isShowPopUpAddToBasket, setIsShowPopUpAddToBasket] = useState(false);

  const handleButtonAddToBasket = () => {
    setIsShowPopUpAddToBasket((prevState) => !prevState);
  };

  const handleClickClosePopUp = () => {
    setIsShowPopUpAddReviewSuccess((prevState) => !prevState);
  };

  useEffect(() => {
    if (cameraId) {
      api.get(`${ReqRoutes.Cameras}/${cameraId}`)
        .then((response) => setCurrentCamera(response.data));
    }

    api.get(`${ReqRoutes.Cameras}/${cameraId}/${ReqRoutes.Similar}`)
      .then((response) => setSimilarProducts(response.data));

    api.get(`${ReqRoutes.Cameras}/${cameraId}/${ReqRoutes.Reviews}`)
      .then((response) => setReviews(response.data));

  }, [cameraId]);

  return (
    <div className="wrapper">
      <Header />
      <main>
        {currentCamera && (
          <>
            <div className="page-content">
              <Breadcrumbs />
              <div className="page-content__section">
                <section className="product">
                  <div className="container">
                    <div className="product__img">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet={`/${currentCamera.previewImgWebp}`}
                        />
                        <img
                          src={currentCamera.previewImg}
                          srcSet={currentCamera.previewImg2x}
                          width={560}
                          height={480}
                          alt={currentCamera.name}
                        />
                      </picture>
                    </div>
                    <div className="product__content">
                      <h1 className="title title--h3">{currentCamera.name}</h1>
                      <Rate />
                      <p className="product__price">
                        <span className="visually-hidden">Цена:</span>{currentCamera.price} ₽
                      </p>

                      <button
                        className="btn btn--purple"
                        type="button"
                        onClick={handleButtonAddToBasket}
                      >
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
            <BtnUp />
            <PopUpAddReview isShowPopUpAddReview={isShowPopUpAddReview} />
            <ModalReviewSuccess
              isShowPopUp={isShowPopUpAddReviewSuccess}
              onClickClosePopUp={handleClickClosePopUp}

            />
            <PopUpAddToBasket
              product={currentCamera}
              isShowPopUpAddToBasket={isShowPopUpAddToBasket} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export { Product };

