import { Fragment } from "react";
import "./App.css";
import Messenger from "./components/Messenger";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AccountProvider from './context/Authprovider';


function App() {
  return (
    <Fragment>
      <ToastContainer />
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </Fragment>
  );
}

export default App;
