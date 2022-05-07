import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthRequest from "../Request/AuthRequest";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAccessToken, setUser } from "../Store/AuthSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.length === 0 || password.length === 0) {
      toast.error("Please fill in all fields");
      return;
    }

    // console.log(username, password);
    AuthRequest.loginUser({ username, password })
      .then((response) => {
        console.log(response);

        // Set access token to localStorage and redux store
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("user", JSON.stringify(response));
        dispatch(setAccessToken(response.accessToken));
        dispatch(setUser(response.user));

        // Then response
        if (response._id) {
          toast.success("Login successful");
          navigate("products");
        }
      })
      .catch((err) => {
        // console.log(err);
        toast.error(err.response.message);
      });
  };

  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <div className="container-form-login">
        <h1 className="title-login">login</h1>
        {/* <div className="container-btn-switch-login-sigup">
                <button className="btn-switch-login active">login</button>
                <button className="btn-switch-sigup">sigup</button>
            </div> */}
        <div className="field field-username">
          <label htmlFor="usernameId">username</label>
          <input
            id="usernameId"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="field field-password">
          <label htmlFor="passwordId">password</label>
          <input
            id="passwordId"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="btn-login">login</button>
        <div className="container-sigup-link">
          <span>not a member?</span>
          <Link to="../sigup">sign up now!</Link>
        </div>
      </div>
    </form>
  );
};

export default React.memo(LoginForm);
