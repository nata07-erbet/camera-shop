import { ALL_STARS } from '../../const/const';

type RateProps = {
  rating: number;
}


function Rate({ rating }: RateProps) {
  return (
    <div className="rate product-card__rate">
      {
        Array.from({ length: rating }, (_) => rating)
          .map((rate) => (
            <svg width={17} height={16} aria-hidden="true">
              <use xlinkHref="#icon-full-star" />{rate}
            </svg>
          ))
      }

      {
        Array.from({ length: ALL_STARS - rating }, (_) => rating)
          .map((rate) => (
            <svg width={17} height={16} aria-hidden="true">
              <use xlinkHref="#icon-star" /> {rate}
            </svg>
          ))
      }
      <p className="visually-hidden">Рейтинг: {rating}</p>
      <p className="rate__count">
        <span className="visually-hidden">Всего оценок:</span>67
      </p>
    </div>
  );
}

export { Rate };
