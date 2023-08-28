import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const PrivateRoute = ({ component: Component }) => {
  const { currentUser } = useAuth();

  const hasCurrentUser = !!currentUser;

  return hasCurrentUser ? Component:<Navigate to='/login'/>
};
