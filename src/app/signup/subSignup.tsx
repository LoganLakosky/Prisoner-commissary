"use client";
import { useState, ChangeEvent, FormEvent } from "react";

import "./signup.css";
import Link from "next/link";
export default function SubSignup() {
  const [usernameValue, setUsernameValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  function validateLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (usernameValue === "") {
      alert("Please update your username");
      return;
    }
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
            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsernameValue(e.target.value)}
          />
        </div>
        <div className="passwordContainer">
          <label htmlFor="password-label">Password:</label>
          <input
            type="text"
            id="password-label"
            value={passwordValue}
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
