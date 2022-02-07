import { Fragment } from "react";
import "./App.css";
import Messenger from "./components/Messenger";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AccountProvider from "./context/Authprovider";
import UserProvider from './context/userProvider';

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <UserProvider>
        <AccountProvider>
          <Messenger />
        </AccountProvider>
      </UserProvider>
    </Fragment>
  );
}

export default App;
