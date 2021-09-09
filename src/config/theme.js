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
            main: '#61dafb',
            light: '#61dafb',
            dark: '#21a1c4',
        },
        secondary: {
            main: '#b5ecfb',
            light: '#61dafb',
            dark: '#21a1c4',
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
    }
    //   overrides: {
    //     MuiPaper: {
    //       root: {
    //         padding: '20px 10px',
    //         margin: '10px',
    //         backgroundColor: '#fff', // 5d737e
    //       },
    //     },
    //     MuiButton: {
    //       root: {
    //         margin: '5px',
    //       },
    //     },
    // },
});

export default theme;