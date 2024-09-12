import { PopUpWrapper } from '../pop-up/pop-up-wrapper';
import { PopUpAddReviewSuccess } from '../pop-up/pop-up-add-review-success';

type ModalReviewSuccessProps = {
  isShowPopUp: boolean;
  onClose: () => void;
}

function ModalReviewSuccess({ isShowPopUp, onClose }: ModalReviewSuccessProps) {
  return (
    <PopUpWrapper isShowPopUp={isShowPopUp} isNarrow={false} onClose={onClose}>
      <PopUpAddReviewSuccess />
    </PopUpWrapper>

  );
}

export { ModalReviewSuccess };
