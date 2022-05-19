import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import RegisterScreen from "../auth/RegisterScreen";
import LoginScreen from "../auth/LoginScreen";

const AuthRouter = () => {
  return (
    //     <Router>
    //       <Switch>
    //         <Route exact path="/journal" component={JournalScreen} />
    //         <Route exact path="/auth/login" component={loginScreen} />
    //         <Route exact path="/auth/register" component={RegisterScreen} />
    //         <Redirect to="/auth/login" />
    //       </Switch>
    //     </Router>
    //   </div>
    // </div>
    <div className="auth_main">
      <div className="auth__box-container">
        <Route>
          <div>
            <Switch>
              <Route exact path="/auth/login" component={LoginScreen} />

              <Route exact path="/auth/register" component={RegisterScreen} />
              <Redirect to="/auth/login" />
            </Switch>
          </div>
        </Route>
      </div>
    </div>
  );
};

export default AuthRouter;
