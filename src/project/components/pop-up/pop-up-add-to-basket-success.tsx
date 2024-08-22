import classNames from 'classnames';

type PopUpAddToBasketSuccessProps = {
  isShowPopUpAddToBasketSuccess: boolean;
};

function PopUpAddToBasketSuccess({ isShowPopUpAddToBasketSuccess }: PopUpAddToBasketSuccessProps) {
  return (
    <div className={classNames(
      'modal',
      { 'is-active': isShowPopUpAddToBasketSuccess },
      'modal--narrow'
    )
    }>
      <div className="modal__wrapper">
        <div className="modal__overlay" />
        <div className="modal__content">
          <p className="title title--h4">Товар успешно добавлен в корзину</p>
          <svg className="modal__icon" width={86} height={80} aria-hidden="true">
            <use xlinkHref="#icon-success" />
          </svg>
          <div className="modal__buttons">
            <a className="btn btn--transparent modal__btn" href="#">
              Продолжить покупки
            </a>
            <button className="btn btn--purple modal__btn modal__btn--fit-width">
              Перейти в корзину
            </button>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап">
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export { PopUpAddToBasketSuccess };

