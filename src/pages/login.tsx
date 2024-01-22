import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firbase";

const Login = () => {
  const db = getDatabase(app);

  const putData = () => {
    set(ref(db, "users/test"), {
      username: "test",
      email: "test@gmail.com",
      profile_picture: "https://image.url.com",
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={putData} type="submit">
        Submit!
      </button>
    </div>
  );
};

export default Login;
