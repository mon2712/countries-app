import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontSize: 12,
        h1: {
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
});

export default theme;
