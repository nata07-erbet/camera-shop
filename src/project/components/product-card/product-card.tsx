import { TCamera } from '../../types/product.types';
import { CAMERA } from '../../mocks/mocks';

type ProductCardProps = {
  product: TCamera;
};

function ProductCard({ product = CAMERA }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <picture>
          <source
            type='image/webp'
            srcSet={product.previewImgWebp}
          />
          <img
            src={product.previewImg}
            srcSet={product.previewImg2x}
            width={280}
            height={240}
            alt={product.name}
          />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <svg width={17} height={16} aria-hidden="true">
            <use xlinkHref="#icon-full-star" />
          </svg>
          <p className="visually-hidden">Рейтинг: {product.rating}</p>
          <p className="rate__count">
            <span className="visually-hidden">Всего оценок:</span>{product.reviewCount}
          </p>
        </div>
        <p className="product-card__title">
          {product.name}
        </p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>{product.price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <button
          className="btn btn--purple product-card__btn"
          type="button"
        >
          Купить
        </button>
        <a className="btn btn--transparent" href="#">
          Подробнее
        </a>
      </div>
    </div>
  );
}

export { ProductCard };
