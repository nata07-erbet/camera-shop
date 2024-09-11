import { AppRoutes } from '../../const/const';
import { TCamera } from '../../types/product.types';
import { Link } from 'react-router-dom';

type PopUpRemoveFromBasketProps = {
  product: TCamera;
};



function PopUpRemoveFromBasket({ product }: PopUpRemoveFromBasketProps) {

  const handleButtonRemoveItem = () => {
    console.log('Remove from basket');
  };

  return (
    <>
      <p className="title title--h4">Удалить этот товар?</p>
      <div className="basket-item basket-item--short">
        <div className="basket-item__img">
          <picture>
            <source
              type="image/webp"
              srcSet={product.previewImgWebp}
            />
            <img
              src={product.previewImg}
              srcSet={product.previewImgWebp2x}
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
            <li className="basket-item__list-item">Плёночная фотокамера</li>
            <li className="basket-item__list-item">Любительский уровень</li>
          </ul>
        </div>
      </div>
      <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--half-width"
          type="button"
          onClick={handleButtonRemoveItem}
        >
          Удалить
        </button>
        <Link
          className="btn btn--transparent modal__btn modal__btn--half-width"
          to={AppRoutes.Cameras}
        >
          Продолжить покупки
        </Link>
      </div>
      <button className="cross-btn" type="button" aria-label="Закрыть попап">
        <svg width={10} height={10} aria-hidden="true">
          <use xlinkHref="#icon-close" />
        </svg>
      </button>
    </>
  );
}

export { PopUpRemoveFromBasket };
