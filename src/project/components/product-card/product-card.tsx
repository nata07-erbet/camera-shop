import { Link, generatePath } from 'react-router-dom';
import { TCamera } from '../../types/product.types';
import { Rate } from '../../components/rate/rate';
import classnames from 'classnames';

type ProductCardProps = {
  product: TCamera;
  onButtonBuyClick?: (id: TCamera['id']) => void;
};

function ProductCard({ product, onButtonBuyClick }: ProductCardProps) {
  const href = generatePath('/camera/:cameraId',
    { cameraId: product.id.toString() }
  );

  const productClass = classnames({
    'product- card': true,
    'is-active': product
  });

  const handleButtonClick = () => {
    onButtonBuyClick?.(product.id);
  };

  return (
    <div className={productClass}>
      <div className="product-card__img">
        <picture>
          <source
            type='image/webp'
            srcSet={`/${product.previewImgWebp}`}
          />`
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
          onClick={handleButtonClick}
        >
          Купить
        </button>
        <Link className="btn btn--transparent" to={href}>
          Подробнее
        </Link>
      </div>
    </div>
  );
}

export { ProductCard };
