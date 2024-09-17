import { PopUpAddToBasket } from '../pop-up/pop-up-add-to-basket';
import { PopUpWrapper } from '../pop-up/pop-up-wrapper';
import { TCamera } from '../../types/product.types';

type ModalAddToBasketProps = {
  isShowPopUp: boolean;
  onClose?: () => void;
  product: TCamera;
  onButtonAddToBasketClick?: () => void;
};

function ModalAddToBasket({ isShowPopUp, onClose, product, onButtonAddToBasketClick }: ModalAddToBasketProps) {

  return (
    <PopUpWrapper
      isShowPopUp={isShowPopUp}
      isNarrow={false}
      onClose={onClose}
    >
      <PopUpAddToBasket product={product} onButtonAddToBasketClick={onButtonAddToBasketClick} />
    </PopUpWrapper>
  );
}

export { ModalAddToBasket };
