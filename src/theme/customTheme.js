import { createTheme } from "@material-ui/core"

const customTheme = createTheme({
    palette: {
        dark: {
            main: '#707070'
        },
        text: {
            primary: '#707070',
        }
    },
    typography: {
        fontFamily: 'Open Sans',
        h2: {
            fontSize: '3rem',
            fontWeight: 300
        },
        h4: {
            fontSize: '1.3rem',
            fontWeight: 700
        }
    }
})

export default customTheme