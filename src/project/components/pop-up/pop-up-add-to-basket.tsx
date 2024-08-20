import classNames from 'classnames';
import { TCamera } from '../../types/product.types'

type PopUpAddToBasketProps = {
  isShowPopUpAddToBasket: true;
  product: TCamera;
};

function PopUpAddToBasket({ isShowPopUpAddToBasket, product }: PopUpAddToBasketProps) {
  return (
    <div className={
      classNames('modal',
        { 'is - active': isShowPopUpAddToBasket }
      )}>
      <div className="modal__wrapper">
        <div className="modal__overlay" />
        <div className="modal__content">
          <p className="title title--h4">Добавить товар в корзину</p>
          <div className="basket-item basket-item--short">
            <div className="basket-item__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet={product.previewImgWebp}
                />
                <img
                  src={product.previewImg}
                  srcSet={product.previewImg2x}
                  width={140}
                  height={120}
                  alt={product.description}
                />
              </picture>
            </div>
            <div className="basket-item__description">
              <p className="basket-item__title">{product.name}</p>
              <ul className="basket-item__list">
                <li className="basket-item__list-item">
                  <span className="basket-item__article">Артикул:</span>{" "}
                  <span className="basket-item__number">{product.vendorCode}</span>
                </li>
                <li className="basket-item__list-item">Плёночная фотокамера</li>
                <li className="basket-item__list-item">Любительский уровень</li>
              </ul>
              <p className="basket-item__price">
                <span className="visually-hidden">Цена:</span>{product.price}₽
              </p>
            </div>
          </div>
          <div className="modal__buttons">
            <button
              className="btn btn--purple modal__btn modal__btn--fit-width"
              type="button"
            >
              <svg width={24} height={16} aria-hidden="true">
                <use xlinkHref="#icon-add-basket" />
              </svg>
              Добавить в корзину
            </button>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап">
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export { PopUpAddToBasket };
