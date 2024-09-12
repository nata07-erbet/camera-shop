function RateBar() {
  return (
    <div className="rate__bar">
      <div className="rate__group">
        <input
          className="visually-hidden"
          id="star-5"
          name="rate"
          type="radio"
          defaultValue={5}
        />
        <label
          className="rate__label"
          htmlFor="star-5"
          title="Отлично"
        />
        <input
          className="visually-hidden"
          id="star-4"
          name="rate"
          type="radio"
          defaultValue={4}
        />
        <label
          className="rate__label"
          htmlFor="star-4"
          title="Хорошо"
        />
        <input
          className="visually-hidden"
          id="star-3"
          name="rate"
          type="radio"
          defaultValue={3}
        />
        <label
          className="rate__label"
          htmlFor="star-3"
          title="Нормально"
        />
        <input
          className="visually-hidden"
          id="star-2"
          name="rate"
          type="radio"
          defaultValue={2}
        />
        <label
          className="rate__label"
          htmlFor="star-2"
          title="Плохо"
        />
        <input
          className="visually-hidden"
          id="star-1"
          name="rate"
          type="radio"
          defaultValue={1}
        />
        <label
          className="rate__label"
          htmlFor="star-1"
          title="Ужасно"
        />
      </div>
      <div className="rate__progress">
        <span className="rate__stars">0</span> <span>/</span>{''}
        <span className="rate__all-stars">5</span>
      </div>
    </div>
  );
}

export { RateBar };
