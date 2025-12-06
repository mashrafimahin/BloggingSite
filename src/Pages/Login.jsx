// hooks
// router
import { NavLink } from "react-router-dom";
// styles
import {
  Container,
  Title,
  Box,
  Label,
  Input,
  TagLine,
} from "../Styles/Component/Form.Style";
// components
import Button from "../Components/Button";

// main
function Login() {
  return (
    <Container>
      {/* Heading  */}
      <Title>Quick Login</Title>
      {/* Email Address  */}
      <Box>
        <Label>Email Address:</Label>
        <Input placeholder="johnDoe@mail.com" />
      </Box>
      {/* Password Box  */}
      <Box>
        <Label>Password:</Label>
        <Input type="password" placeholder="Enter your password" />
      </Box>
      <Button>Login</Button>
      {/* external link */}
      <TagLine>
        Don't have an account? <NavLink to="/signup">SignUp</NavLink>
      </TagLine>
    </Container>
  );
}

export default Login;
