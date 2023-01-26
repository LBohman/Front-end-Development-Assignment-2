import UserProvider from "./UserContext";

// Responsible for merging all the contexts that we might use
const AppContext = (props) => {
    
    return (
        <UserProvider>
            { props.children }
        </UserProvider>
    )
}
export default AppContext;