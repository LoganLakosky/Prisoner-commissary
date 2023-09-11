"use client";
import Link from "next/link";
import "./subLogin.css";
import { useState, ChangeEvent, FormEvent } from "react";

export default function SubLogin() {
  const [usernameValue, setUsernameValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  function validateLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (usernameValue.length < 2) {
      //Add better error
      alert("Please enter a longer username");
      return;
    }

    if (passwordValue.length < 2) {
      //Add better Error
      alert("Please enter a longer password");
      return;
    }

    window.location.href = "/";
  }

  return (
    <form className="mainLoginForm" onSubmit={validateLogin}>
      <div className="mainSubLogin">
        <div className="usernameInputContainer">
          <label htmlFor="username-input">Username:</label>
          <input
            type="text"
            id="username-input"
            required
            value={usernameValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsernameValue(e.target.value)}
          />
        </div>
        <div className="passwordInputContainer">
          <label htmlFor="password-input">Password:</label>
          <input
            type="text"
            id="password-input"
            required
            value={passwordValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPasswordValue(e.target.value)}
          />
        </div>

        <div className="submitBtnContainer">
          <button>Submit</button>
        </div>
      </div>
      <div className="returnLinkContainer">
        <Link href="/">Return Home</Link>
      </div>
    </form>
  );
}
