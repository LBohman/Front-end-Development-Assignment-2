import { useEffect } from "react";
import { useState } from "react";
import { saveTranslation } from "../api/user";
import TranslateInput from "../components/Translate/TranslateInput";
import TranslateSignDisplay from "../components/Translate/TranslateSignDisplay";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import { storageSave } from "../utils/storage";

const Translate = () => {

  const { user } = useUser();

  const [translation, setTranslation] = useState("");
  useEffect(() => {
  }, [translation]);

  const onSubmit = (inputValue) => {
    setTranslation(inputValue);
    saveToApi(inputValue);
    // AHAHAH
    storageSave(STORAGE_KEY_USER, inputValue);
  };

  const saveToApi = async (inputValue) => {
    await saveTranslation(user, inputValue);
  }

  return (
    <>
      <h1>Translate</h1>
      <section>
        <TranslateInput onSubmit={onSubmit} />
      </section>
      <section>
        <TranslateSignDisplay letter={translation} />
      </section>
    </>
  );
};
export default withAuth(Translate);
