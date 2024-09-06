import { PopUpAddToBasket } from '../pop-up/pop-up-add-to-basket';
import { PopUpWrapper } from '../pop-up/pop-up-wrapper';
import { TCamera } from '../../types/product.types';

type ModalAddToBasketProps = {
  isShowPopUp: boolean,
  onClickClosePopUp: () => void,
  product: TCamera
};

function ModalAddToBasket({ isShowPopUp, onClickClosePopUp, product }: ModalAddToBasketProps) {

  return (
    <PopUpWrapper
      isShowPopUp={isShowPopUp}
      isNarrow={false}
      onClose={onClickClosePopUp}
      children={
        <PopUpAddToBasket
          product={product}
        />}
    />
  );
}

export { ModalAddToBasket }
