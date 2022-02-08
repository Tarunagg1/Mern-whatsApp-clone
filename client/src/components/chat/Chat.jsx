import { Box } from '@mui/system';
import { useContext, useState, useEffect } from 'react';
import { AccountContext } from '../../context/Authprovider';
import { userContext } from '../../context/userProvider';
import { getConversation } from '../../services/api';

//components
import ChatHeader from './ChatHeader';
import Messages from './Messages';

const Chat = () => {
    const { person } = useContext(userContext);
    const { Account } = useContext(AccountContext);

    const [conversation, setConversation] = useState({});
    
    useEffect(() => {
        const getConversationDetails = async () => {
            let {data} = await getConversation({ senderId: Account.googleId, receiverId: person.googleId });
            setConversation(data);
        }
        getConversationDetails();
    }, [person.googleId]);

    return (
        <Box style={{height: '75%'}}>
            <ChatHeader person={person} />
            <Messages person={person} conversation={conversation} />
        </Box>
    )
}

export default Chat;