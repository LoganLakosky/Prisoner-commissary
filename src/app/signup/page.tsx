import "./signup.css";
import SubSignup from "./subSignup";
export default function Signup() {
  return (
    <div className="mainSignupContainer">
      <div className="mainSignup">
        <div className="mainSignupTop">
          <h1>Signup</h1>
        </div>
        <SubSignup />
      </div>
    </div>
  );
}
