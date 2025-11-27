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

// main
const PostCard = React.memo(({ Obj }) => {
  return (
    <Box>
      <Image src={Obj.image} loading="lazy" />
      <MiniContainer>
        <Title>{Obj.title}</Title>
        <Paragrapgh>{Obj.description.slice(0, 100) + "....."}</Paragrapgh>
        <Time>Published: {Obj.date}</Time>
      </MiniContainer>
    </Box>
  );
});

export default PostCard;
