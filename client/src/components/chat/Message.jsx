import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useContext } from 'react';
import { AccountContext } from '../../context/Authprovider';

const useStyles = makeStyles({
    wrapper: {
        background: '#FFFFFF',
        padding: 5,
        maxWidth: '60%',
        width: 'fit-content',
        display: 'flex',
        borderRadius: 10,
        wordBreak: 'break-word'
    },
    own: {
        background: '#dcf8c6',
        padding: 5,
        maxWidth: '60%',
        width: 'fit-content',
        marginLeft: 'auto',
        display: 'flex',
        borderRadius: 10,
        wordBreak: 'break-word'
    },
    text: {
        fontSize: 14,
        padding: '0 25px 0 5px'
    },
    time: {
        fontSize: 10,
        color: '#919191',
        wordBreak: 'keep-all',
        marginTop: 'auto'
    }
})

const Message = ({ message }) => {
    const classes = useStyles();
    const { Account } = useContext(AccountContext);

    const formatDate = (date) => {
        return date < 10 ? '0' + date : date;
    }

    return (
        <Box className={Account.googleId === message.sender ? classes.own : classes.wrapper}>
            <Typography className={classes.text}>{message.text}</Typography>
            <Typography className={classes.time}>
                {formatDate(new Date(message.createdAt).getHours())}:{formatDate(new Date(message.createdAt).getMinutes())}
            </Typography>
        </Box>
    )
}

export default Message;