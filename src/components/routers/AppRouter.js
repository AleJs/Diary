import React, { useEffect, useState } from "react";
import { HashRouter as Router, Switch, Redirect } from "react-router-dom";
import { firebase } from "../../firebase/firebase-config";
import { useDispatch } from "react-redux";

import { login } from "../actions/auth";
import PrivateRouter from "./PrivateRoute";
import PublicRouter from "./PublicRouter";
import JournalScreen from "../journal/JournalScreen";
import AuthRouter from "./AuthRouter";
import { StartLoadingNotes } from "../actions/notes";
const AppRouter = () => {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(true);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));

        setisLoggedIn(true);
        dispatch(StartLoadingNotes(user.uid));
      } else {
        setisLoggedIn(false);
      }
      setCheck(false);
    });
    return () => {};
  }, [dispatch, setCheck, setisLoggedIn]);

  if (check) {
    <div>espere...</div>;
  }

  return (
    <Router>
      <Switch>
        <PublicRouter
          isAuthenticated={isLoggedIn}
          path="/auth"
          component={AuthRouter}
        />
        <PrivateRouter
          isAuthenticated={isLoggedIn}
          path="/"
          component={JournalScreen}
        />

        <Redirect exact to="/auth/login" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
