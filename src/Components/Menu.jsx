// router
import { NavLink } from "react-router-dom";
// styles
import {
  Container,
  Heading,
  Order,
  List,
} from "../Styles/Component/Menu.Style";
const common = {
  color: "inherit",
  textDecoration: "none",
};

// main
function Menu({ title, listObj, ...rest }) {
  return (
    <Container {...rest}>
      <Heading>{title}</Heading>
      <Order>
        {listObj.map((elm, i) => (
          <NavLink style={common} key={i}>
            <List key={i}>{elm}</List>
          </NavLink>
        ))}
      </Order>
    </Container>
  );
}

export default Menu;
