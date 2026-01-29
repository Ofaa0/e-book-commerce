import { Navigate } from "react-router-dom";

const ProtectedHomeRoute = ({ children }) => {
  const currentUserTkn =
    JSON.parse(localStorage.getItem("eUserTkn")) ||
    JSON.parse(sessionStorage.getItem("eUserTkn")) ||
    "";
  if (!currentUserTkn) return <Navigate to={"/login"} replace />;
  return children;
};

export default ProtectedHomeRoute;
