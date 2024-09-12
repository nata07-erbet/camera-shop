import { PopUpWrapper } from '../pop-up/pop-up-wrapper';
import { PopUpAddReview } from '../pop-up/pop-up-add-review';

type ModalReviewProps = {
  isShowPopUp: boolean;
  onClose?: () => void;
};

function ModalReview({ isShowPopUp, onClose, }: ModalReviewProps) {
  return (
    <PopUpWrapper
      isShowPopUp={isShowPopUp}
      isNarrow={false}
      onClose={onClose}
    >
      <PopUpAddReview />
    </PopUpWrapper>
  );
}

export { ModalReview };
