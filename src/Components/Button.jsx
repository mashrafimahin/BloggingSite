// styles
import CommonButton from "../Styles/Component/Button.Style";

// main
function Button({ children, ...rest }) {
  return <CommonButton {...rest}>{children}</CommonButton>;
}

export default Button;
