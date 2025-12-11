// hooks
import { Activity, useContext, useState } from "react";
// styles
import {
  Container,
  Title,
  FlexBox,
  Box,
  Label,
  Input,
  Selection,
  Option,
  TagLine,
} from "../Styles/Component/Form.Style";
// country names
const countries = [
  { name: "Bangladesh" },
  { name: "Russia" },
  { name: "Qatar" },
  { name: "United States" },
  { name: "Japan" },
  { name: "China" },
];
// components
import Button from "../Components/Button";
import { NavLink } from "react-router-dom";
// context
import { AuthContext } from "../Contexts/AuthContext";
// router
import { useNavigate } from "react-router-dom";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

// main
function SignUp() {
  // state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    dateOfBirth: "",
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // context
  const { SignUp } = useContext(AuthContext);

  // handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = (data) => {
    // checkpoint
    if (
      data.firstName === "" &&
      data.lastName === "" &&
      data.email === "" &&
      data.password === ""
    ) {
      alert("Please fill the input fields first.!");
      return;
    }
    SignUp(data);
    setIsDisabled(true);
    navigate("/profile");
  };

  // handle visibility
  const handleVisible = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <Container>
      <Title>Create New Account</Title>
      {/* Names section */}
      <FlexBox>
        <Box>
          <Label>First Name:</Label>
          <Input
            name="firstName"
            type="text"
            value={formData.firstName}
            placeholder="John"
            onChange={handleChange}
            required
          />
        </Box>
        <Box>
          <Label>Last Name:</Label>
          <Input
            name="lastName"
            type="text"
            value={formData.lastName}
            placeholder="Doe"
            onChange={handleChange}
            required
          />
        </Box>
      </FlexBox>
      {/* Contact section */}
      <FlexBox>
        <Box>
          <Label>Email:</Label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            placeholder="johnDoe@gmail.com"
            onChange={handleChange}
            required
          />
        </Box>
        <Box>
          <Label>Password:</Label>
          <div style={{ display: "flex" }}>
            <Input
              name="password"
              type={isVisible ? "text" : "password"}
              value={formData.password}
              placeholder="********"
              onChange={handleChange}
            />
            <button
              style={{
                padding: "0 10px",
                background: "transparent",
                border: "1px solid #d4d4d4",
                borderLeft: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={handleVisible}
            >
              <FontAwesomeIcon icon={isVisible ? faEyeSlash : faEye} />
            </button>
          </div>
        </Box>
      </FlexBox>
      {/* Details section */}
      <FlexBox>
        <Box>
          <Label>Phone:</Label>
          <Input
            name="phone"
            value={formData.phone}
            placeholder="+880-123456789"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Label>Date of birth:</Label>
          <Input
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            placeholder="01-02-2000"
            onChange={handleChange}
          />
        </Box>
      </FlexBox>
      {/* Country selection */}
      <FlexBox>
        <Box>
          <Label>Country:</Label>
          <Selection
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <Activity mode="hidden">
              <Option value={"Unknwon"} defaultValue={true}>
                --Select--
              </Option>
            </Activity>
            {countries.map((item, index) => (
              <Option value={item.name} key={index}>
                {item.name}
              </Option>
            ))}
          </Selection>
        </Box>
      </FlexBox>
      {/* Submit Button */}
      <Box>
        <Button
          type="submit"
          onClick={() => handleSubmit(formData)}
          disabled={isDisabled}
        >
          {isDisabled ? "Creating Account ..." : "SignUp"}
        </Button>
      </Box>
      {/* external link */}
      <TagLine>
        Already have an account? <NavLink to="/login">Sign In</NavLink>
      </TagLine>
    </Container>
  );
}

export default SignUp;
