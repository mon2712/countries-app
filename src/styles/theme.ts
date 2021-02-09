import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontSize: 12,
        h1: {
            color: '#454E8A',
            fontSize: 30,
            fontWeight: 500,
        },
        h2: {
            fontSize: 16,
            fontWeight: 500,
        },
        h3: {
            fontSize: 14,
        },
    },
    palette: {
        primary: {
            light: '#187EF0',
            main: '#454E8A',
            dark: '#073BA3',
            contrastText: '#FFF',
        },
        secondary: {
            light: '#585858',
            main: '#434343',
            dark: '#313030',
            contrastText: '#FFF',
        },
    },
});

export default theme;
