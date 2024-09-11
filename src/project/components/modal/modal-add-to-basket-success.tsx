import { PopUpAddToBasketSuccess } from '../../components/pop-up/pop-up-add-to-basket-success';
import { PopUpWrapper } from '../pop-up/pop-up-wrapper';

type ModalAddToBasketSuccessProps = {
  isShowPopUp: boolean;
  onClose?: () => void;
}

function ModalAddToBasketSuccess({ isShowPopUp, onClose }: ModalAddToBasketSuccessProps) {
  return (
    <PopUpWrapper
      isShowPopUp={isShowPopUp}
      isNarrow={false}
      onClose={onClose}
      children={<PopUpAddToBasketSuccess />}
    />
  );
}

export { ModalAddToBasketSuccess };
