// hooks
import { Activity, useContext, useEffect, useState } from "react";
// router
import { useNavigate } from "react-router-dom";
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
// context
import { DataContext } from "../Contexts/DataContext";
import { AuthContext } from "../Contexts/AuthContext";

// main
function Profile() {
  const navigate = useNavigate();
  // state
  const [size, setSize] = useState(false);
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    dateOfBirth: "",
  });

  // context
  const { userId, LogOut } = useContext(AuthContext);
  const { userData, UpdateUser } = useContext(DataContext);

  // fetch data on mount
  useEffect(() => {
    if (userData) {
      setNewData({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone,
        country: userData.country,
        dateOfBirth: userData.dateOfBirth,
      });
    }
  }, [userData]);

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
  const handleUpdate = () => {
    UpdateUser(userId, newData)
      // eslint-disable-next-line no-unused-vars
      .then((x) => {
        alert("Successfully updated");
        setShow(false);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((x) => {
        alert("Update failed. Please try again later.");
        setShow(false);
      });
    // return to previous stage
  };

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
          <Image>
            {userData
              ? `${newData.firstName.slice(0, 1)}${newData.lastName.slice(
                  0,
                  1
                )}`
              : "..."}
          </Image>
          <Box $pattern={true} $responsive={true}>
            <Title>{`${newData.firstName} ${newData.lastName}`}</Title>
            <SubTitle>{newData.email}</SubTitle>
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
                <Text $customSize={true}>{newData.firstName}</Text>
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
                <Text $customSize={true}>{newData.lastName}</Text>
              )}
            </Box>
            {/* Email Address */}
            <Box>
              <SubTitle $listStyle={true}>Email Address:</SubTitle>
              <Text $customSize={true}>{newData.email}</Text>
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
                <Text $customSize={true}>{newData.phone}</Text>
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
                <Text $customSize={true}>{newData.dateOfBirth}</Text>
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
                <Text $customSize={true}>{newData.country}</Text>
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
            {/* Active buttons */}
            <Activity mode={!show ? "visible" : "hidden"}>
              {/* Edit button */}
              <Button
                onClick={handleEdit}
                style={{ width: size ? "100%" : "auto", ...editBtn }}
              >
                <FontAwesomeIcon icon={faPen} />
                &nbsp;Edit Details
              </Button>
              {/* Change password button */}
              <Button style={{ width: size ? "100%" : "auto", ...changeBtn }}>
                Change Password
              </Button>
              {/* Log out button */}
              <Button
                onClick={() => {
                  LogOut();
                  navigate("/");
                }}
                style={{ width: size ? "100%" : "auto", ...cancelBtn }}
              >
                <FontAwesomeIcon icon={faRightFromBracket} />
                &nbsp;Log Out
              </Button>
            </Activity>
            {/* Active buttons */}
            <Activity mode={show ? "visible" : "hidden"}>
              {/* Cancel button  */}
              <Button
                onClick={handleClose}
                style={{ width: size ? "100%" : "auto", ...cancelBtn }}
              >
                Cancel Edit
              </Button>
              {/* Update button  */}
              <Button onClick={handleUpdate} style={saveBtn}>
                <FontAwesomeIcon
                  icon={{ width: size ? "100%" : "auto", ...faCheck }}
                />
                &nbsp;Update
              </Button>
            </Activity>
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
