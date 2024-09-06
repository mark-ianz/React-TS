import { useEffect, useState } from "react";

type Props = {};

type Agents = {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
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

      console.log(data);
      setAgents(data);
    };

    fetchAgent();
  }, []);

  return (
    <main className="p-10">
      <p>Valorant</p>
      <div>
        <ul className="grid grid-cols-5 gap-4">
          {agents?.map((agent) => (
            <li key={agent.uuid} className="flex flex-col border items-center rounded-md shadow-md p-4">
              <img
                src={agent.displayIcon}
                alt={agent.displayName + "display icon"}
                className="w-40 border rounded-full"
              />
              <p className="font-semibold mt-4 text-xl">{agent.displayName}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
