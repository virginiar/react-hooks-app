import { use, type JSX } from "react";
import { Navigate } from "react-router";

import { UserContext } from "../context/UserContext";

interface Props {
  element: JSX.Element; // React.ReactNode
  // element: React.ReactNode; // React.ReactNode
}

export const PrivateRoute = ({ element }: Props) => {
  const { authStatus } = use(UserContext);

  if (authStatus === "checking") {
    return null;
  }

  if (authStatus === "authenticated") {
    return element;
  }

  // Con replace no crea entrada nueva en el historial
  return <Navigate to="/login" replace />;
};
