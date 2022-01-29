import { ThemeProvider } from '@material-ui/core';
import customTheme from './theme/customTheme'

const theme = customTheme

function App() {
  return (
    <ThemeProvider theme={theme}>
      
    </ThemeProvider>
  );
}

export default App;
