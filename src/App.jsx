import { ThemeProvider, Toolbar, Box } from '@material-ui/core';
import logo from './assets/image/logo.png'
import AppBody from './AppBody'
import customTheme from './theme/customTheme'

const theme = customTheme

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: '100%' }}>
        <Toolbar sx={{boxShadow: '2px 0 10px 0 #ccc', backgroundColor: 'white'}}>
          <img alt="logo" src={logo} />
        </Toolbar>
        <AppBody />
      </Box>
    </ThemeProvider>
  );
}

export default App;
