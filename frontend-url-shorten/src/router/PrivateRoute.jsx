import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../context-api/AppContext";
import Dashboard from "../pages/Dashboard";

const PrivateRoute = () => {
  const { token } = useContext(AppContext);

  return token ? <Dashboard/> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
