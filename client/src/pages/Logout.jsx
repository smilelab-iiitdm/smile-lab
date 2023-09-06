import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";
import { BACKEND_URL } from "../api";

const Logout = () => {
  const { state, dispatch } = useContext(UserContext);
  //Using Promises instead of async
  const history = useHistory();
  useEffect(() => {
    fetch(`${BACKEND_URL}/users/logout`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        dispatch({ type: "USER", payload: false });
        history.push("/login");

        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <React.Fragment>
      <br></br>
      <h1>User Logged out</h1>
      <br></br>
    </React.Fragment>
  );
};

export default Logout;
