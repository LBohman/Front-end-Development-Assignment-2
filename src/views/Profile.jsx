import ProfileActions from "../components/Profile/ProfileActions";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTranslationHistory from "../components/Profile/ProfileHistory";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";

const Profile = () => {

    const { user } = useUser();

    return (
        <>
            <h1>Profile</h1>
            <ProfileHeader username={ user.username } />
            <ProfileActions />
            <ProfileTranslationHistory translations={ user.translations } />
        </>
    )
}
// withAuth wraps around Profile, which takes in a component in its function
// and if there is a user in LS redirects to the Profile view 
export default withAuth(Profile); 