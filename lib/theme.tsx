import { createMuiTheme } from '@material-ui/core/styles';
import {} from './interfaces';

const theme = createMuiTheme({
  // resolucao do bug de overflow no componente 'Grid'
  overrides: {
    MuiGrid: {
      container: {
        width: '100% !important',
        margin: '0 !important',
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 762,
      lg: 1024,
      xl: 1280,
    },
  },
  palette: {
    corPrimaria: '#5c6ac4',
    corSecundaria: '#19f719',
  },
  typography: {
    fontSize: 13,
  },
  spacing: 4,
});

export default theme;
