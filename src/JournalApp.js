import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AppRouter from "./components/routers/AppRouter";
import "./styles/style.scss";
const JournalApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default JournalApp;
