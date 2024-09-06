import React, { useEffect, useState } from "react";

type Props = {};

type Agent = {
  displayName: string;
  description: string;
};

export default function Valorant({}: Props) {
  const [agent, setAgent] = useState<Agent>();

  useEffect(() => {
    const fetchAgent = async () => {
      const response = await fetch("https://valorant-api.com/v1/agents");
      const { data } = await response.json();

      setAgent(data[0]);
    };

    fetchAgent();
  }, []);

  console.log(agent);
  return (
    <div>
      <p>{agent?.displayName}</p>
      <p>{agent?.developerName}</p>
    </div>
  );
}
