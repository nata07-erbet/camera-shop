import { PopUpRemoveFromBasket } from '../../components/pop-up/pop-up-remove-from-basket';
import { TCamera } from '../../types/product.types';
import { PopUpWrapper } from '../pop-up/pop-up-wrapper';

type ModalRemoveFromBasketProps = {
  isShowPopUp: boolean;
  onClose?: () => void;
  product: TCamera;
}

function ModalRemoveFromBasket({ isShowPopUp, onClose, product }: ModalRemoveFromBasketProps) {
  return (
    <PopUpWrapper
      isShowPopUp={isShowPopUp}
      isNarrow={false}
      onClose={onClose}
      children={<PopUpRemoveFromBasket product={product} />}
    />
  );
}

export { ModalRemoveFromBasket }
