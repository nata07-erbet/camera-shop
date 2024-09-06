import { useEffect } from 'react'
import classNames from 'classnames';
import { PropsWithChildren } from 'react';

type PopUpWrapperProps = PropsWithChildren<{
  isShowPopUp: boolean,
  isNarrow: boolean,
  onClose?: () => void,
}>

function PopUpWrapper({ isShowPopUp, isNarrow, onClose, children }: PopUpWrapperProps) {
  const modalClass = classNames('modal', { 'is-active': isShowPopUp }, { 'modal--narrow': isNarrow });

  const handleClickClosePopUp = () => {
    onClose?.();
    !isShowPopUp;
  }

  const handleEscKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      onClose?.();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscKeyDown);

    return () => document.removeEventListener('keydown', handleEscKeyDown);
  }, [handleEscKeyDown]);



  return (
    <div className={modalClass}>
      <div className="modal__wrapper">
        <div className="modal__overlay" />
        <div className="modal__content">
          {children}
          <button
            className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
            onClick={handleClickClosePopUp}
          >
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close" />
            </svg>
          </button>
        </div>
      </div>
    </ div>
  );
}

export { PopUpWrapper }
