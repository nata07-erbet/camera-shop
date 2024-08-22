import classNames from 'classnames';

type IsShowPopUpThanksProps = {
  isShowPopUpThanks: boolean,
};

function PopUpThanks({ isShowPopUpThanks }: IsShowPopUpThanksProps) {

  const modalClass = classNames('modal', { 'is-active': isShowPopUpThanks }, 'modal--narrow');

  return (
    <div className={modalClass}>
      <div className="modal__wrapper">
        <div className="modal__overlay" />
        <div className="modal__content">
          <p className="title title--h4">Спасибо за покупку</p>
          <svg className="modal__icon" width={80} height={78} aria-hidden="true">
            <use xlinkHref="#icon-review-success" />
          </svg>
          <div className="modal__buttons">
            <button
              className="btn btn--purple modal__btn modal__btn--fit-width"
              type="button"
            >
              Вернуться к покупкам
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

export { PopUpThanks };
