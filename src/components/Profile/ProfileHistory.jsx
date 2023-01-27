import ProfileHistoryItem from "./ProfileHistoryItem";
import "./ProfileHistory.css";

const ProfileTranslationHistory = ({ translations }) => {

    const translationList = translations.slice(-10).reverse().map(
        (translation, index) => <ProfileHistoryItem key={ index + "-" + translation } phrase={ translation } />
        );

    return (
        <section className="profile-history-section">
            <h4>Your latest translations</h4>
            { translationList.length === 0 && <p>No prior translations, go translate something!</p>}
            <ul>
                { translationList }
            </ul>
        </section>
    )
}
export default ProfileTranslationHistory;