// styles
import { SearchStyle, I, Input } from "../Styles/Component/SearchBox.Style";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// main
function SearchBox({ currentValue, changeHandler, ...rest }) {
  return (
    <SearchStyle>
      <Input
        type="text"
        placeholder="Search Contents ...."
        value={currentValue}
        onChange={(e) => changeHandler(e.target.value)}
        {...rest}
      />
      <I>
        <FontAwesomeIcon icon={faSearch} />
      </I>
    </SearchStyle>
  );
}

export default SearchBox;
