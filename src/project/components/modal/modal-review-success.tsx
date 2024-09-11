import { PopUpWrapper } from '../pop-up/pop-up-wrapper';
import { PopUpAddReviewSuccess } from '../pop-up/pop-up-add-review-success';

type ModalReviewSuccessProps = {
  isShowPopUp: boolean;
  onClickClosePopUp: () => void;
}

function ModalReviewSuccess({ isShowPopUp, onClickClosePopUp }: ModalReviewSuccessProps) {
  return (
    <PopUpWrapper
      isShowPopUp={isShowPopUp}
      onClose={onClickClosePopUp}
      children={<PopUpAddReviewSuccess />}
      isNarrow={true} />
  );
}

export { ModalReviewSuccess };
