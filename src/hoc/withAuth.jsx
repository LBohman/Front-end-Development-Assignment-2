import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

// Uses the closure syntax, a function that returns another function,
// which uses the first/outer functions arguments in the inner function
const withAuth = (Component) => (props) => {
  const { user } = useUser();
  if (user !== null) {
    return <Component {...props} />;
    
  } else {
    return <Navigate to="/" />;
  }
};
export default withAuth;
