import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";
import "../styles/login.css";
import { BACKEND_URL } from "../api";

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = async (e) => {
    e.preventDefault();

    const res = await fetch(`${BACKEND_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Login Unsuccessful");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Login Successful");
      history.push("/");
    }
  };

  return (
    <React.Fragment>
      <div className="container-fluid my-5  page-fade">
        <h1>Login</h1>
        <div>
          <div class="formdiv">
            <form method="POST">
              <div class="form-group col-md-10">
                <label for="username" class="col-sm-2 col-form-label">
                  Email
                </label>
                <div class="col-sm">
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  ></input>
                </div>
              </div>
              <div class="form-group col-md-10">
                <label for="password" class="col-sm-2 col-form-label">
                  Password
                </label>
                <div class="col-sm">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-10">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    id="formsub"
                    onClick={userLogin}
                  >
                    Log in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
