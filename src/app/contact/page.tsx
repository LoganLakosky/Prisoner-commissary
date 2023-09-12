"use client";
import "./contact.css";
import { useState, ChangeEvent } from "react";

export default function ContactPage() {
  const [titleInputValue, setTitleInputValue] = useState<string>("");
  const [bodyInputValue, setBodyInputValue] = useState<string>("");
  function sendContactInfo(e: FormData) {
    window.location.href = "/";
  }

  return (
    <div className="contactMainContainer">
      <div className="contactMain">
        <div className="contactTop">
          <h1>Contact us below</h1>
        </div>
        <form className="contactForm" action={sendContactInfo}>
          <div className="titleContainer">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              required
              onChange={(e: ChangeEvent<HTMLInputElement>) => setTitleInputValue(e.target.value)}
            />
          </div>
          <div className="bodyContainer">
            <label htmlFor="body">Body:</label>
            <textarea
              id="body"
              required
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setBodyInputValue(e.target.value)}
            ></textarea>
          </div>
          <div className="submitBtnContainer">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
