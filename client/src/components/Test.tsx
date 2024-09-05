import Button from "./Button";
import { useNavigate } from "react-router-dom";
type Props = {};

export default function Test({}: Props) {
  const navigate = useNavigate();
  return (
    <div className="border p-10 rounded-md bg-white">
      <p>Modal</p>
      <Button onClick={() => navigate("/")}>Route Me</Button>
    </div>
  );
}
