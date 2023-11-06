import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase";

export const LoginUser = ({ email, password }) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((UserCred) => {
      const user = UserCred.user;
      console.log("User Info", user);
    })
    .catch((error) => {
      toast.error("Wrong username or password !!!");
      console.log(error);
    });
};

export const SignupUser = ({ username, email, password }) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCred) => {
      console.log(userCred);
      updateProfile(auth.currentUser, {
        displayName: username,
      });
    })
    .catch((error) => console.log(error));
};
