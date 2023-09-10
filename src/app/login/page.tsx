import "./login.css";
import SubLogin from "./subLogin";

export default function Login() {
  return (
    <div className="mainLoginContainer">
      <div className="mainLogin">
        <div className="mainLoginTop">
          <h1>Login</h1>
        </div>
        <SubLogin />
      </div>
    </div>
  );
}
