import Swal from "sweetalert2";

import { firebase, googleAuthProvider } from "../../firebase/firebase-config";

import { types } from "../../types/types";
import { logoutNote } from "./notes";
import { startLoading, finishLoading } from "./ui";
// export const login = (uid, displayName) => {
//   return {
//     types: types.login,
//     payload: {
//       uid,
//       displayName,
//     },
//   };
// };

//version corta
export const googleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};
export const startRegisterEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({
          displayName: name,
        });
        dispatch(login(user.uid, user.displayName));
        Swal.fire({
          icon: "success",
          title: "success",
          width: "25rem",
        });
      });
  };
};

export const startLogin = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(finishLoading());
        dispatch(login(user.uid, user.displayName));

        Swal.fire({
          icon: "success",
          title: "success",
          width: "25rem",
        });
      })
      .catch((e) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: e.message,
          width: "25rem",
        });
        dispatch(finishLoading());
      });
  };
};

export const login = (uid = "", displayName = "") => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "success",
          width: "25rem",
        });
      });

    dispatch(logout());
    dispatch(logoutNote());
  };
};

export const logout = () => ({
  type: types.logout,
});
