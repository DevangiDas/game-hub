import bullsEye from "../assets/bulls_eye.png";
import thumbsUp from "../assets/thumbs_up.png";
import meh from "../assets/meh.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" , boxSize: "25px" },
    4: { src: thumbsUp, alt: "Recommended", boxSize: "28px" },
    5: { src: bullsEye, alt: "Exceptional", boxSize:'25px'},
  };
  return <Image {...emojiMap[rating]} borderRadius="5px" marginTop={1}/>;
};

export default Emoji;
