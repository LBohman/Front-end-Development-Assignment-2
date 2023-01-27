import { useEffect } from "react";
import { useState } from "react";
import { saveTranslation } from "../api/user";
import TranslateInput from "../components/Translate/TranslateInput";
import TranslateSignDisplay from "../components/Translate/TranslateSignDisplay";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import { storageSave } from "../utils/storage";
import "./Translate.css";

const Translate = () => {

  const { user, setUser } = useUser();

  const [translation, setTranslation] = useState("");
  useEffect(() => {
  }, [translation]);

  const onSubmit = async (inputValue) => {
    setTranslation(inputValue);
    const [error, updatedUser] = await saveTranslation(user, inputValue);
    if (error !== null) {
      return
    }

    // Keep UI state and server state in sync
    storageSave(STORAGE_KEY_USER, updatedUser)
    // Update context state
    setUser(updatedUser);
  };

  return (
    <>
    <div className="translate-container">
      <section>
        <TranslateInput onSubmit={onSubmit} />
      </section>
      <section className="translate-sign-display">
        <TranslateSignDisplay letter={translation} />
      </section>
    </div>
    </>
  );
};
export default withAuth(Translate);
