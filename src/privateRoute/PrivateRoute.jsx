import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
    
  let token = sessionStorage.getItem("accesstoken");

  return token ? props.children : <Navigate to="/" />;
};

export default PrivateRoute;
