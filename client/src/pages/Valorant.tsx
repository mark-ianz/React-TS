import { useEffect, useState } from "react";

type Props = {};

type Agents = {
  uuid: string;
  displayName: string;
  description: string;
};

type ApiResponse = {
  data: Agents[];
  status: number;
};

export default function Valorant({}: Props) {
  const [agents, setAgents] = useState<Agents[]>();

  useEffect(() => {
    const fetchAgent = async () => {
      const response = await fetch("https://valorant-api.com/v1/agents");
      const { data, status }: ApiResponse = await response.json();

      if (status !== 200) {
        return console.log("There was an error!");
      }

      setAgents(data);
    };

    fetchAgent();
  }, []);

  return (
    <div>
      <p>Valorant</p>
      <div>
        {agents?.map((agent) => (
          <p key={agent.uuid}>{agent.displayName}</p>
        ))}
      </div>
    </div>
  );
}
