import { createContext, useState,useRef, useEffect } from "react";
import {io} from 'socket.io-client';
import { socketServer } from '../constant/config';


export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
    const [Account, setAccount] = useState();
    const [activeUsers, setactiveUsers] = useState([]);
    const [incommingFlag, setIncommingFlag] = useState(false);

    const socket = useRef();

    useEffect(() => {
        socket.current = io.connect(socketServer);
    }, []);
    

  return (
    <AccountContext.Provider value={{
        Account,
        setAccount,
        socket,
        activeUsers,
        setactiveUsers,
        setIncommingFlag,
        incommingFlag,
    }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
