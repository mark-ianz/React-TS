import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

type Props = {};

export default function LandingPage({}: Props) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Hello welcome!</h1>
      <Button onClick={() => navigate("/playground")}>Go to playground!</Button>
    </div>
  );
}
