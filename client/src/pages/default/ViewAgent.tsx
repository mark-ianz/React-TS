import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Props = {};

type Agent = {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
};

type ApiResponse = {
  data: Agent;
  status: number;
};

export default function ViewAgent({}: Props) {
  const { uuid } = useParams<{ uuid: string }>();
  const [agent, setAgent] = useState<Agent>();

  useEffect(() => {
    const fetchAgent = async () => {
      const response = await fetch(
        "https://valorant-api.com/v1/agents/" + uuid
      );
      const { data, status }: ApiResponse = await response.json();

      if (status !== 200) {
        return console.log("There was an error!");
      }

      console.log(data);
      setAgent(data);
    };

    fetchAgent();
  }, [uuid]);

  return (
    <main>
      <p>{agent?.displayName}</p>
      <img
        src={agent?.displayIcon}
        alt={agent?.displayName + " display icon"}
        className="w-40 border rounded-full"
      />
    </main>
  );
}
