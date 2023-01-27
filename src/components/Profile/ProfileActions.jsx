import { Link } from "react-router-dom";
import { storageDelete, storageSave } from "../../utils/storage";
import { useUser } from "../../context/UserContext";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { clearUserHistory } from "../../api/user";
import "./ProfileActions.css";

const ProfileActions = () => {

    const { user, setUser } = useUser();

    const handleLogoutClick = () => {
        if (window.confirm('Are you sure?')) {
            // Send an event to the parent
            storageDelete(STORAGE_KEY_USER)
            setUser(null);
        }
    }

    const handleClearHistory = async () => {
        if (!window.confirm("Do you wish to delete past translations?\nThis cannot be undone!")) {
            return;
        }

        const clearedUser = {...user, translations: []}

        storageSave(STORAGE_KEY_USER, clearedUser);
        setUser(clearedUser);
        clearUserHistory(clearedUser);
    }

    return (
        <ul className="profile-actions-list">
            {/* <li className="profile-actions-list-item"><Link to="/translate">Translate</Link></li> */}
            <li className="profile-actions-list-item"><button className="profile-actions-button" onClick={ handleClearHistory }>Clear history</button></li>
            <li className="profile-actions-list-item"><button className="profile-actions-button" onClick={ handleLogoutClick }>Logout</button></li>
        </ul>
    )
}
export default ProfileActions;