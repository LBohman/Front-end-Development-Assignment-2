import LoginForm from "../components/Login/LoginForm";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div>
        <h1 className="login-page-header">Lost in translation</h1>
        <h2 className="login-page-sub-header">Get started</h2>
      </div>
      <LoginForm />
    </>
  );
};
export default Login;