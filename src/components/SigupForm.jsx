import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthRequest from "../Request/AuthRequest";
import { toast } from "react-toastify";
import validator from "validator";

const SigupForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check the password whether is matched or not
    if (password !== confirmPassword) {
      toast.error("The password and confirm password do not match");
      return;
    }

    // Check email is validated or not
    if (!validator.isEmail(email)) {
      toast.error("The email is invalid");
      return;
    }

    // console.log(username, email, password, confirmPassword, isAdmin);
    AuthRequest.registerUser({ username, email, password, isAdmin })
      .then((response) => {
        // const { data } = response; <- This for data extraction
        toast.success("Successfully registered");
        navigate("..");
      })
      .catch((error) => {
        toast.error(error.response.data.error);
      });
  };

  return (
    <form className="form-sigup" onSubmit={handleSubmit}>
      <div className="container-form-sigup">
        <div className="header-sigup mt-4">
          <h1 className="title mb-4">sign up</h1>
          <p className="subtitle">
            please fill in this form to create an account
          </p>
        </div>
        <div className="field field-username">
          <label htmlFor="usernameId">username</label>
          <input
            className="input-text"
            id="usernameId"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="field field-email">
          <label htmlFor="emailId">email</label>
          <input
            className="input-text"
            id="emailId"
            type="email"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="field field-password">
          <label htmlFor="passwordId">password</label>
          <input
            className="input-text"
            id="passwordId"
            type="password"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="field field-password-confirm">
          <label htmlFor="passwordConfirmId">confirm password</label>
          <input
            className="input-text"
            id="passwordConfirmId"
            type="password"
            // confirm password
            value={confirmPassword}
            required
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <div className="field field-is-admin">
          <label htmlFor="isAdminId">are you an admin?</label>
          <input
            id="isAdminId"
            type="checkbox"
            checked={isAdmin}
            onChange={(e) => {
              setIsAdmin(e.target.checked);
            }}
          />
        </div>
        <div className="px-3 py-4 text-center underline">
          <Link to="/">Already have an account?</Link>
        </div>
        <div className="container-btn-sigup">
          <button className="btn-sigup" type="submit">
            sign up
          </button>
        </div>
      </div>
    </form>
  );
};

export default React.memo(SigupForm);
