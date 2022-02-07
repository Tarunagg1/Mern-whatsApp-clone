import { Search, MoreVert } from '@material-ui/icons';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { Fragment } from 'react';
import { AccountContext } from '../../context/Authprovider';


const useStyles = makeStyles({
    header: {
        height: 35,
        background: '#ededed',
        display: 'flex',
        padding: '10px 16px',
        alignItems: 'center'
    },
    displayPicture: {
        width: 37,
        height: 37,
        objectFit: 'cover',
        borderRadius: '50%',
        padding: '0 2px'
    },
    name: {
        marginLeft: 10
    },
    rightContainer: {
        marginLeft: 'auto',
        '& > *': {
            padding: 8,
            fontSize: 22,
            color: '#919191'
        }
    },
    status: {
        fontSize: 12,
        color: 'rgb(0, 0, 0, 0.6)',
        marginLeft: 10
    }
});

const ChatHeader = ({ person }) => {
    const classes = useStyles();    
    console.log(person);

    const url = person.imageUrl || 'https://static.straitstimes.com.sg/s3fs-public/articles/2020/12/01/af_moneyheist_011220.jpg';
    
    // const { activeUsers } = useContext(AccountContext);

    // console.log(activeUsers);

    return (
        <Fragment>
        <Box className={classes.header}>
            <img src={url} className={classes.displayPicture} alt="Picture" />     
            <Box>
                <Typography className={classes.name}>{person.name}</Typography>   
                <Typography className={classes.status}>
                    Offline
                    {/* {activeUsers?.find(user => user.userId === person.googleId) ? 'Online' : 'Offline'} */}
                </Typography>    
            </Box>   
            <Box className={classes.rightContainer}>
                <Search />
                <MoreVert />    
            </Box> 
        </Box>
    </Fragment>
    )
}

export default ChatHeader;