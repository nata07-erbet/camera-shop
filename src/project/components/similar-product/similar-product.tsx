import { TCamera } from '../../types/product.types';
import { Rate } from '../../components/rate/rate';

type SimilarProductProps = {
  similarProduct: TCamera;
  rating: number;
}

function SimilarProduct({ similarProduct, rating }: SimilarProductProps) {
  return (
    <div className="product-card is-active">
      <div className="product-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={similarProduct.previewImgWebp}
          />
          <img
            src={similarProduct.previewImg}
            srcSet={similarProduct.previewImg2x}
            width={280}
            height={240}
            alt={similarProduct.name}
          />
        </picture>
      </div>
      <div className="product-card__info">
        <Rate rating={rating} />
        <p className="product-card__title">FastShot MR-5</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>18 970 ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button">
          Купить
        </button>
        <a className="btn btn--transparent" href="#">
          Подробнее
        </a>
      </div>
    </div>
  );
}

export { SimilarProduct };
