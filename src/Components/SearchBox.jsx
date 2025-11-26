// styles
import { SearchStyle, I, Input } from "../Styles/Component/SearchBox.Style";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// main
function SearchBox() {
  return (
    <SearchStyle>
      <Input type="text" placeholder="Search Contents ...." />
      <I>
        <FontAwesomeIcon icon={faSearch} />
      </I>
    </SearchStyle>
  );
}

export default SearchBox;
