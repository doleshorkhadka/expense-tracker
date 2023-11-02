import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

export const LoginUser = ({ email, password }) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((UserCred) => {
      const user = UserCred.user;
      console.log("User Info", user);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const SignupUser = ({ email, password }) => {
  createUserWithEmailAndPassword(auth, email, password).then((userCred) => {});
};
