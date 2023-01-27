import { useForm } from "react-hook-form";
import "./TranslateInput.css";

const userInputFieldConfig = {
    maxLength: 40,
    pattern: /^[A-Za-z\s]*$/
}

const TranslateInput = ({ onSubmit }) => {

    const { register, handleSubmit, reset } = useForm();

    const submission = (event) => {
        onSubmit(event.userInputField);
        reset({userInputField: ""});
    }

    return (
        <>
            <form onSubmit={handleSubmit(submission)}>
                <fieldset className="translate-form-fieldset">
                    <input {...register("userInputField", userInputFieldConfig)} className="translate-form-input" type="text" placeholder="Write your word here..." />
                    <button className="translate-form-button" type="submit">Translate</button>
                </fieldset>
            </form>
        </>
    )
}
export default TranslateInput;