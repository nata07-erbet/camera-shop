import { TCamera } from '../../types/product.types';

type PopUpAddToBasketProps = {
  product: TCamera;
  onButtonAddToBasketClick?: () => void;
};

function PopUpAddToBasket({ product, onButtonAddToBasketClick }: PopUpAddToBasketProps) {
  const handleButtonAddToBasket = () => {
    onButtonAddToBasketClick?.();
  };

  return (
    <>
      <p className="title title--h4">Добавить товар в корзину</p>
      <div className="basket-item basket-item--short">
        <div className="basket-item__img">
          <picture>
            <source
              type="image/webp"
              srcSet={`/${product.previewImgWebp}`}
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
              <span className="basket-item__article">Артикул:</span>{''}
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
          onClick={handleButtonAddToBasket}
        >
          <svg width={24} height={16} aria-hidden="true">
            <use xlinkHref="#icon-add-basket" />
          </svg>
          Добавить в корзину
        </button>
      </div>
    </>
  );
}

export { PopUpAddToBasket };
