import { createContext, useContext, useState } from "react";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { storageRead } from "../utils/storage";

// Responsible for managing the user
// Context -> exposing value
const UserContext = createContext();

// Custom hook, so we don't need to call the useContext function in every single component that might need it
export const useUser = () => {
    return useContext(UserContext); // will return { user, setUser}
}

// Provide -> managing state
const UserProvider = (props) => {
    const [ user, setUser ] = useState(storageRead(STORAGE_KEY_USER));

    const state = {
        user,
        setUser
    }
    return (
        <UserContext.Provider value={ state }>
            { props.children }
        </UserContext.Provider>
    );
}
export default UserProvider;