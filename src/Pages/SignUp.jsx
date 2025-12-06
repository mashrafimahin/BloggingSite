// hooks
import { Activity, useState } from "react";
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

// main
function SignUp() {
  // state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    dateOfBirth: "",
  });

  // handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
            value={formData.firstName}
            placeholder="John"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Label>Last Name:</Label>
          <Input
            name="lastName"
            value={formData.lastName}
            placeholder="Doe"
            onChange={handleChange}
          />
        </Box>
      </FlexBox>
      {/* Contact section */}
      <FlexBox>
        <Box>
          <Label>Email:</Label>
          <Input
            name="email"
            value={formData.email}
            placeholder="johnDoe@gmail.com"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Label>Phone:</Label>
          <Input
            name="phone"
            value={formData.phone}
            placeholder="+880-123456789"
            onChange={handleChange}
          />
        </Box>
      </FlexBox>
      {/* Details section */}
      <FlexBox>
        <Box>
          <Label>Country:</Label>
          <Selection
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <Activity mode="hidden">
              <Option value={"Unknwon"} selected>
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
      {/* Submit Button */}
      <Box>
        <Button type="submit">SignUp</Button>
      </Box>
      {/* external link */}
      <TagLine>
        Already have an account? <NavLink to="/signin">Sign In</NavLink>
      </TagLine>
    </Container>
  );
}

export default SignUp;
