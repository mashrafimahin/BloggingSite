// style
import {
  Box,
  MiniContainer,
  Image,
  Title,
  Paragrapgh,
  Time,
} from "../Styles/Component/PostBox.Style";

// main
function PostCard() {
  return (
    <Box>
      <Image
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
        }
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
      />
      <MiniContainer>
        <Title>Hello</Title>
        <Paragrapgh>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          odit.
        </Paragrapgh>
        <Time>1234</Time>
      </MiniContainer>
    </Box>
  );
}

export default PostCard;
