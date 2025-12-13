// hooks
import { useContext, useState } from "react";
// router
import { NavLink, useNavigate } from "react-router-dom";
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
// context
import { AuthContext } from "../Contexts/AuthContext";

// main
function Login() {
  const navigate = useNavigate();
  // state
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // context
  const { SignIn } = useContext(AuthContext);

  // handle submit
  const handleSubmit = (data) => {
    // checkpoint
    if (data.email === "" && data.password === "") {
      alert("You must fill the input fields");
      return;
    }
    // change state
    setIsLoading(true);
    // sign in
    SignIn(data);
    // navigate
    navigate("/");
  };

  // handleChange
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      {/* Heading  */}
      <Title>Quick Login</Title>
      {/* Email Address  */}
      <Box>
        <Label>Email Address:</Label>
        <Input
          value={formData.email}
          name="email"
          onChange={handleChange}
          placeholder="johnDoe@mail.com"
        />
      </Box>
      {/* Password Box  */}
      <Box>
        <Label>Password:</Label>
        <Input
          value={formData.password}
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Enter your password"
        />
      </Box>
      <Button disabled={isLoading} onClick={() => handleSubmit(formData)}>
        {isLoading ? "Logging in ..." : "Login"}
      </Button>
      {/* external link */}
      <TagLine>
        Don't have an account? <NavLink to="/signup">SignUp</NavLink>
      </TagLine>
    </Container>
  );
}

export default Login;
