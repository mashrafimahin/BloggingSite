// hooks
import { useEffect, useState } from "react";
// styles
import {
  Main,
  Container,
  Box,
  Underline,
  Image,
  Title,
  SubTitle,
  Text,
  List,
} from "../Styles/Component/Profile.Style";
import { Input, Selection, Option } from "../Styles/Component/Form.Style";
const editBtn = { background: "green", fontSize: "1rem" };
const cancelBtn = { background: "red", fontSize: "1rem" };
const saveBtn = { background: "darkcyan", fontSize: "1rem" };
const changeBtn = { background: "orange", fontSize: "1rem" };
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCheckDouble,
  faCircleHalfStroke,
  faDownload,
  faPen,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
// components
import Button from "../Components/Button";
// additional data
// country names
const countries = [
  { name: "Bangladesh" },
  { name: "Russia" },
  { name: "Qatar" },
  { name: "United States" },
  { name: "Japan" },
  { name: "China" },
];

// main
function Profile() {
  // state
  const [size, setSize] = useState(false);
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    country: "",
    dateOfBirth: "",
  });

  // handle change
  const handleChange = (e) => {
    setNewData({
      ...newData,
      [e.target.name]: e.target.value,
    });
  };

  // handle edit button
  const handleEdit = () => {
    setShow(true);
  };

  // handle cancel button
  const handleClose = () => {
    setNewData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      dateOfBirth: "",
    });
    setShow(false);
  };

  // handle update button
  const handleUpdate = () => {};

  // window on mount
  useEffect(() => {
    // default
    window.scrollTo(0, 0);
  }, []);

  // window effect
  useEffect(() => {
    // deafult function
    const SizeCalc = () => {
      if (window.innerWidth < 767) {
        setSize(true);
      } else {
        setSize(false);
      }
    };

    // event listeners
    window.addEventListener("resize", SizeCalc);
    // function run
    SizeCalc();

    // while unmount
    return () => window.removeEventListener("resize", SizeCalc);
  }, []);

  return (
    <Main>
      {/* Top view */}
      <Container>
        {/* Top view  */}
        <Box $centerize={true}>
          <Image>MT</Image>
          <Box $pattern={true} $responsive={true}>
            <Title>Mashrafi Mahin</Title>
            <SubTitle>mail@com</SubTitle>
          </Box>
        </Box>
      </Container>
      {/* Personal Details  */}
      <Container>
        {/* Details Tab  */}
        <Box $pattern={true} $responsive={true}>
          {/* Heading  */}
          <Box>
            <Title>Personal Details</Title>
          </Box>
          <Underline />
          {/* Details */}
          <List>
            {/* First Name */}
            <Box>
              <SubTitle $listStyle={true}>First Name:</SubTitle>
              {show ? (
                <Input
                  type="text"
                  name="firstName"
                  value={newData.firstName}
                  onChange={handleChange}
                  style={{ minWidth: "100%", padding: "6px 20px" }}
                />
              ) : (
                <Text $customSize={true}>Mashafi</Text>
              )}
            </Box>
            {/* Last Name */}
            <Box>
              <SubTitle $listStyle={true}>Last Name:</SubTitle>
              {show ? (
                <Input
                  type="text"
                  name="lastName"
                  value={newData.lastName}
                  onChange={handleChange}
                  style={{ minWidth: "100%", padding: "6px 20px" }}
                />
              ) : (
                <Text $customSize={true}>Mashafi</Text>
              )}
            </Box>
            {/* Email Address */}
            <Box>
              <SubTitle $listStyle={true}>Email Address:</SubTitle>
              <Text $customSize={true}>Mashafi</Text>
            </Box>
            {/* Phone */}
            <Box>
              <SubTitle $listStyle={true}>Phone Number:</SubTitle>
              {show ? (
                <Input
                  type="text"
                  name="phone"
                  value={newData.phone}
                  onChange={handleChange}
                  style={{ minWidth: "100%", padding: "6px 20px" }}
                />
              ) : (
                <Text $customSize={true}>Mashafi</Text>
              )}
            </Box>
            {/* Date of birth  */}
            <Box>
              <SubTitle $listStyle={true}>Date of birth:</SubTitle>
              {show ? (
                <Input
                  type="date"
                  name="dateOfBirth"
                  value={newData.dateOfBirth}
                  onChange={handleChange}
                  style={{ minWidth: "100%", padding: "6px 20px" }}
                />
              ) : (
                <Text $customSize={true}>Mashafi</Text>
              )}
            </Box>
            {/* Country  */}
            <Box>
              <SubTitle $listStyle={true}>Country:</SubTitle>
              {show ? (
                <Selection
                  name="country"
                  value={newData.country}
                  onChange={handleChange}
                  style={{ minWidth: "100%", padding: "6px 10px" }}
                >
                  {countries.map((elm, i) => (
                    <Option value={elm.name} key={i}>
                      {elm.name}
                    </Option>
                  ))}
                </Selection>
              ) : (
                <Text $customSize={true}>Mashafi</Text>
              )}
            </Box>
          </List>
          <Underline style={{ marginBottom: "20px" }} />
          {/* Action Buttons  */}
          <Box
            $customWidth={true}
            $centerize={true}
            $justify={"center"}
            $responsive={true}
          >
            {/* Edit button */}
            {!show && (
              <Button
                onClick={handleEdit}
                style={{ width: size ? "100%" : "auto", ...editBtn }}
              >
                <FontAwesomeIcon icon={faPen} />
                &nbsp;Edit Details
              </Button>
            )}
            {/* Cancel button  */}
            {show && (
              <Button
                onClick={handleClose}
                style={{ width: size ? "100%" : "auto", ...cancelBtn }}
              >
                Cancel Edit
              </Button>
            )}
            {/* Change password */}
            {!show && (
              <Button style={{ width: size ? "100%" : "auto", ...changeBtn }}>
                Change Password
              </Button>
            )}
            {/* Update button  */}
            {show && (
              <Button onClick={handleUpdate} style={saveBtn}>
                <FontAwesomeIcon
                  icon={{ width: size ? "100%" : "auto", ...faCheck }}
                />
                &nbsp;Update
              </Button>
            )}
            {/* Log out button */}
            {!show && (
              <Button style={{ width: size ? "100%" : "auto", ...cancelBtn }}>
                <FontAwesomeIcon icon={faRightFromBracket} />
                &nbsp;Log Out
              </Button>
            )}
          </Box>
        </Box>
      </Container>
      {/* Features  */}
      <Container>
        <Box $justify={"space-around"} $centerize={true} $responsive={true}>
          <Button style={{ width: "100%" }}>
            <FontAwesomeIcon icon={faCircleHalfStroke} />
            &nbsp;Dark Mode
          </Button>
          <Button style={{ width: "100%" }}>
            <FontAwesomeIcon icon={faCheckDouble} />
            &nbsp;Liscense & Agreements
          </Button>
          <Button style={{ width: "100%" }}>
            <FontAwesomeIcon icon={faDownload} />
            &nbsp;Download Profile Data
          </Button>
        </Box>
      </Container>
    </Main>
  );
}

export default Profile;
