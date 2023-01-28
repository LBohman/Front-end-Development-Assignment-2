import UserProvider from "./UserContext";

// Responsible for merging all the contexts that might used
const AppContext = (props) => {
  return <UserProvider>{props.children}</UserProvider>;
};
export default AppContext;