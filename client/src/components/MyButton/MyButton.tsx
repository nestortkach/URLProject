import { ButtonType } from "../../types";
import "./MyButton.scss";

const MyButton: React.FC<ButtonType> = ({
  handleClick,
  btnType,
  text,
  isDisabled,
}) => {
  return (
    <button
      onClick={handleClick}
      type={btnType}
      className={`myButton btn btn-success`}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default MyButton;
