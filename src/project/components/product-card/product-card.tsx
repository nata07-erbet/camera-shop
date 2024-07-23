import { TCamera } from '../../types/product.types';
import { Rate } from '../../components/rate/rate';
import classnames from 'classnames';
type ProductCardProps = {
  product: TCamera;
};

function ProductCard({ product }: ProductCardProps) {
  const productClass = classnames({
    'product- card': true,
    'is-active': product
  });

  return (
    <div className={productClass}>
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
        <Rate rating={product.rating} />
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
