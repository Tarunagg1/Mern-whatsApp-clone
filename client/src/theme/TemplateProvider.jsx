import React from 'react';
// import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { createMuiTheme } from '@mui/material';
import { ThemeProvider } from '@mui/styles';

const TemplateContext = React.createContext(null);

export const TemplateProvider = ({ children }) => {
    const theme = createMuiTheme({
        overrides: {
            MuiDrawer: {
                paperAnchorLeft: {
                    left: 62,
                    top: 17,
                    height: '95%',
                    width: '28%',
                    boxShadow: 'none'
                }
            }
        }
    });

    return (
        <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
                {/* <CssBaseline /> */}
                {children}
            </ThemeProvider>
        </TemplateContext.Provider>
    );
}

export default TemplateProvider;