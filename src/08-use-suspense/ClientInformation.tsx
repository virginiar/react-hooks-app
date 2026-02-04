import { use, type Usable } from "react";
import { type User } from "./api/get-user.action";

interface Props {
  getUser: Usable<User>;
}
// const userPromise = getUserAction(1);

export const ClientInformation = ({ getUser }: Props) => {
  // use es un API de React que permite leer un valor
  // de un recurso, como una promesa o el contexto
  // const user = use(getUserAction(1)); // Error: se re-renderiza constantemente

  // Al crear userPromise fuera del componente no se re-renderiza
  // const user = use(userPromise);

  const user = use(getUser);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h2 className="text-4xl font-thin text-white">
        {user.name} - #{user.id}
      </h2>

      <p className="text-white text-2xl">{user.location}</p>
      <p className="text-white text-xl">{user.role}</p>
    </div>
  );
};
