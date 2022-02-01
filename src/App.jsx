import {
    ThemeProvider,
    responsiveFontSizes,
    Toolbar,
    Box,
    Container,
} from "@material-ui/core";
import logo from "./assets/image/logo.png";
import AppBody from "./AppBody";
import customTheme from "./theme/customTheme";

let theme = customTheme;
theme = responsiveFontSizes(theme);

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ height: "100%" }}>
                <Toolbar
                    sx={{
                        boxShadow: "2px 0 10px 0 #ccc",
                        backgroundColor: "white",
                    }}
                >
                    <Container maxWidth="xl">
                        <img alt="logo" src={logo} />
                    </Container>
                </Toolbar>
                <AppBody />
            </Box>
        </ThemeProvider>
    );
}

export default App;
