import { useEffect } from "react";
import ProfileActions from "../components/Profile/ProfileActions";
import ProfileTranslationHistory from "../components/Profile/ProfileHistory";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import "./Profile.css";

const Profile = () => {

    const { user, setUser } = useUser();

    useEffect(() => {
    }, [ setUser, user.id ]);

    return (
        <>
            <div className="profile-wrapper">
                <div className="profile-container">
                    <h1>Welcome, {user.username}</h1>
                    <ProfileActions />
                </div>
                <ProfileTranslationHistory translations={ user.translations } />
            </div>
        </>
    )
}
// withAuth wraps around Profile, which takes in a component in its function
// and if there is a user in LS redirects to the Profile view 
export default withAuth(Profile); 