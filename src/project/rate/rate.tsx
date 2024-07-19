function Rate() {
  return (
    <div className="rate product__rate">
      <svg width={17} height={16} aria-hidden="true">
        <use xlinkHref="#icon-full-star" />
      </svg>
      <svg width={17} height={16} aria-hidden="true">
        <use xlinkHref="#icon-full-star" />
      </svg>
      <svg width={17} height={16} aria-hidden="true">
        <use xlinkHref="#icon-full-star" />
      </svg>
      <svg width={17} height={16} aria-hidden="true">
        <use xlinkHref="#icon-full-star" />
      </svg>
      <svg width={17} height={16} aria-hidden="true">
        <use xlinkHref="#icon-star" />
      </svg>
      <p className="visually-hidden">Рейтинг: 4</p>
      <p className="rate__count">
        <span className="visually-hidden">Всего оценок:</span>12
      </p>
    </div>
  );
}

export { Rate };
