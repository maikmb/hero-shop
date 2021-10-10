import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const primaryFont = {
    fontFamily: [
        'Open Sans',
        'sans-serif'
    ],
}

const secondaryFont = {
    fontFamily: [
        'Josefin Sans',
        'sans-serif'
    ],
}

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#101010'
        },
        secondary: {
            main: '#016FB9',            
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: primaryFont,
        h1: secondaryFont,
        h2: secondaryFont,
        h3: secondaryFont,
        h4: secondaryFont,
        h5: secondaryFont,
    },
    overrides: {
        MuiPaper: {
            root: {
                padding: '20px 10px',
                margin: '10px',
                backgroundColor: '#fff', // 5d737e
            },
        },
        MuiButton: {
            root: {
                padding: '40px 0px',
            },
        },
    },
});

export default theme;