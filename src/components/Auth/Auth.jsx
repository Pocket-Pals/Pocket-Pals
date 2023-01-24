import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import Button from "../Button/Button";
import { auth } from "../../../firebase";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = async () => {
    const auth = getAuth();
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user + " signed in");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + " " + errorMessage);
      });
  };
  //   const signIn = async () => {
  //     // const auth = getAuth();
  //     try {
  //       const result = await signInWithEmailAndPassword(auth, email, password);
  //       console.log(result + `signed in with ${email}`);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   const signOutUser = async () => {
  //     const auth = getAuth();
  //     try {
  //       const result = await signOut(auth);
  //       console.log("signed out", result);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  const signOutUser = async () => {
    signOut(auth)
      .then(() => {
        console.log("signed out", auth);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Button text="Sign out" onClick={signOutUser} />
      <div>
        <h1>Create account</h1>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Create Account" onClick={createAccount} />
      </div>

      <div>
        <h1>Sign in</h1>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Sign in" onClick={signIn} />
      </div>
    </>
  );
}
