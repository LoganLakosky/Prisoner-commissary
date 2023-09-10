"use client";
import { useState, ChangeEvent, FormEvent } from "react";

import "./signup.css";
import Link from "next/link";
export default function SubSignup() {
  const [usernameValue, setUsernameValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  function validateLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (usernameValue.length < 2) {
      //Add a better error
      alert("Please enter a longer username");
      return;
    }

    if (passwordValue.length < 2) {
      //Add a better error
      alert("Please enter a longer password");
      return;
    }

    window.location.href = "/";
  }

  return (
    <form className="mainSignupForm" onSubmit={validateLogin}>
      <div className="mainSubSignup">
        <div className="usernameContainer">
          <label htmlFor="username-label">Username:</label>
          <input
            type="text"
            id="username-label"
            value={usernameValue}
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsernameValue(e.target.value)}
          />
        </div>
        <div className="passwordContainer">
          <label htmlFor="password-label">Password:</label>
          <input
            type="text"
            id="password-label"
            value={passwordValue}
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPasswordValue(e.target.value)}
          />
        </div>
        <div className="submitBtnContainer">
          <button>Submit</button>
        </div>
      </div>
      <div className="returnHomeLink">
        <Link href="/">Return Home</Link>
      </div>
    </form>
  );
}
