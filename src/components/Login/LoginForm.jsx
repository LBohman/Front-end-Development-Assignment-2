import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from '../../api/user';
import { storageSave } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import "./LoginForm.css";

const usernameConfig = {
  required: true,
  minLength: 2,
};

const LoginForm = () => {
  // Hooks
  const {
    register, // register inputs from the input elements (text, select etc.), with a config for validation ruels
    handleSubmit, // built-in function to submit the form, paired with our own handlefunction
    formState: { errors }, // catches errors in the input/form, in regards to validation of the form
  } = useForm();
  
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  // Local State
  const [ loading, setLoading ] = useState(false);
  const [ apiError, setApiError ] = useState(null); // handles errors while trying to log in, commincation with the API

  // Side Effects
  useEffect(() => {
    if (user !== null) {
      navigate('profile');
    }
    
  }, [ user, navigate ]);

  // Event Handlers
  const onSubmit = async ( { username } ) => {
    setLoading(true);

    const [error, userResponse] = await loginUser(username);
    
    if (error !== null) {
      setApiError(error);
    }
    
    if (userResponse !== null) {
      storageSave(STORAGE_KEY_USER, userResponse); // stores the user in LS
      setUser(userResponse);
    }
    
    setLoading(false);
  };

  // Render Functions
  const errorMessage = (() => {
    if (!errors.username) {
        return null;
    }

    if (errors.username.type === 'required') {
        return <span>Username is required</span>
    }

    if (errors.username.type === 'minLength') {
        return <span>Username is too short (min 2 characters)</span>
    }
  })();

  return (
    <>
    <div className="login-form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="login-form-fieldset">
          {/* <label htmlFor="username">Username: </label> */}
          <input
            className="login-form-input"
            type="text"
            placeholder="What's your name?"
            {...register("username", usernameConfig)}
          />
          { errorMessage }
        <button className="login-form-button" type="submit" disabled={ loading }>Continue</button>
        </fieldset>
        { loading && <p>Logging in...</p>}
        { apiError && <p>{ apiError }</p>}
      </form>
    </div>
    </>
  );
};

export default LoginForm;
