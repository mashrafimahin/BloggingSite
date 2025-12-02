// hooks
import { useContext } from "react";
// router
import { NavLink } from "react-router-dom";
// context
import PostContext from "../Contexts/PostContext";
// style
import React from "react";
import {
  Box,
  MiniContainer,
  Image,
  Title,
  Paragrapgh,
  Time,
} from "../Styles/Component/PostBox.Style";
const common = {
  textDecoration: "none",
  color: "inherit",
};

// main
const PostCard = React.memo(({ Obj }) => {
  // context
  const { setSupplyObject } = useContext(PostContext);

  return (
    <Box>
      {/* <Image src={Obj.image} loading="lazy" /> */}
      <MiniContainer>
        <Title onClick={() => setSupplyObject(Obj)}>
          <NavLink to={`/article/${Obj.title}`} style={common}>
            {Obj.title}
          </NavLink>
        </Title>
        <Paragrapgh>{Obj.description.slice(0, 100) + "....."}</Paragrapgh>
        <Time>Published: {Obj.date}</Time>
      </MiniContainer>
    </Box>
  );
});

export default PostCard;
