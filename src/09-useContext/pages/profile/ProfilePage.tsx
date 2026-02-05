import { use } from "react";

import { Button } from "@/components/ui/button";

import { UserContext } from "@/09-useContext/context/UserContext";

export const ProfilePage = () => {
  const { user} = use(UserContext);

  return (
    <div className="flex flex-col gap-2 items-center justify-center min-h-screen">
      <h1 className="text-4xl">Perfil del usuario</h1>
      <hr />

      <pre className="my-4 w-[80%] overflow-x-auto">
        {JSON.stringify(user, null, 2)}
      </pre>

      <Button variant="destructive">Salir</Button>
    </div>
  );
};
