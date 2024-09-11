import { TCamera } from '../../types/product.types';

type BasketCardProps = {
  product: TCamera;
  onClickDeleteProduct?: (productId: TCamera['id']) => void;
  isShowItem: boolean;
};

function BasketCard({ product, onClickDeleteProduct, isShowItem }: BasketCardProps) {

  const handleButtonDeleteProduct = () => {
    onClickDeleteProduct?.(product.id);
  }

  return (
    <>
      {isShowItem && (
        <li className="basket-item">
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
                alt={product.name}
              />
            </picture>
          </div>
          <div className="basket-item__description">
            <p className="basket-item__title">{product.name}</p>
            <ul className="basket-item__list">
              <li className="basket-item__list-item">
                <span className="basket-item__article">Артикул:</span>{''}
                <span className="basket-item__number">{product.id}</span>
              </li>
              <li className="basket-item__list-item">
                Плёночная фотокамера
              </li>
              <li className="basket-item__list-item">
                Любительский уровень
              </li>
            </ul>
          </div>
          <p className="basket-item__price">
            <span className="visually-hidden">Цена:</span>{product.price} ₽
          </p>
          <div className="quantity">
            <button
              className="btn-icon btn-icon--prev"
              aria-label="уменьшить количество товара"
            >
              <svg width={7} height={12} aria-hidden="true">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </button>
            <label className="visually-hidden" htmlFor="counter1" />
            <input
              type="number"
              id="counter1"
              defaultValue={2}
              min={1}
              max={99}
              aria-label="количество товара"
            />
            <button
              className="btn-icon btn-icon--next"
              aria-label="увеличить количество товара"
            >
              <svg width={7} height={12} aria-hidden="true">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </button>
          </div>
          <div className="basket-item__total-price">
            <span className="visually-hidden">Общая цена:</span>37 940 ₽
          </div>
          <button
            className="cross-btn"
            type="button"
            aria-label="Удалить товар"
            onClick={handleButtonDeleteProduct}
          >
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close" />
            </svg>
          </button>
        </li>
      )}
    </>

  );
}

export { BasketCard };
