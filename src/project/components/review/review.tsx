import { TReview } from '../../types/product.types';
import { Rate } from '../rate/rate';

type ReviewProps = {
  reviews: TReview[];
  onClick?: () => void;
};

function Review({ reviews, onClick }: ReviewProps) {

  const handleClickButtonReview = () => {
    onClick?.();
  };

  return (
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
          <button
            className="btn"
            type="button"
            onClick={handleClickButtonReview}
          >
            Оставить свой отзыв
          </button>
        </div>
        <ul className="review-block__list">
          {reviews.map((review) => (
            <li className="review-card" key={review.id}>
              <div className="review-card__head">
                <p className="title title--h4">{review.userName}</p>
                <time className="review-card__data" dateTime={review.createAt}>
                  13 апреля
                </time>
              </div>
              <Rate rating={review.rating} />
              <ul className="review-card__list">
                <li className="item-list">
                  <span className="item-list__title">Достоинства:</span>
                  <p className="item-list__text">
                    {review.advantage}
                  </p>
                </li>
                <li className="item-list">
                  <span className="item-list__title">Недостатки:</span>
                  <p className="item-list__text">
                    {review.disadvantage}
                  </p>
                </li>
                <li className="item-list">
                  <span className="item-list__title">Комментарий:</span>
                  <p className="item-list__text">
                    {review.review}
                  </p>
                </li>
              </ul>
            </li>
          ))}
        </ul>
        <div className="review-block__buttons">
          <button className="btn btn--purple" type="button">
            Показать больше отзывов
          </button>
        </div>
      </div>
    </section>
  );
}


export { Review };
