import { ALL_STARS } from '../../const/const';

type RateProps = {
  rating: number;
  reviewCount: number
}


function Rate({ rating, reviewCount }: RateProps) {

  return (
    <div className="rate product-card__rate">
      {
        Array.from({ length: rating }, (_) => rating)
          .map((rate) => (
            <svg width={17} height={16} aria-hidden="true" key={rating}>
              <use xlinkHref="#icon-full-star" />{rate}
            </svg>
          ))
      }

      {
        Array.from({ length: ALL_STARS - rating }, (_) => rating)
          .map((rate) => (
            <svg width={17} height={16} aria-hidden="true" key={rating}>
              <use xlinkHref="#icon-star" /> {rate}
            </svg>
          ))
      }
      <p className="visually-hidden">Рейтинг: {rating}</p>
      <p className="rate__count">
        <span className="visually-hidden">Всего оценок:</span>{reviewCount}
      </p>
    </div>
  );
}

export { Rate };
