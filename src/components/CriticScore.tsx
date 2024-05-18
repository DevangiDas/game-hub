import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 80 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge fontSize="14px" colorScheme={color}>
      {" "}
      {score}
    </Badge>
  );
};

export default CriticScore;
