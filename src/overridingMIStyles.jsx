import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: "rgba(0, 0, 0, 0.8)",
      light: "#555"
    },
    secondary: {
      main: "#f60",
      dark: "#db5800",
      contrastText: "#fff"
    }
  },
  overrides:{
    MuiAppBar:{
      colorPrimary:{
        backgroundColor: 'transparent'
      }
    },
    MuiButton:{
      root:{
        fontSize: '11px',
        minWidth: '25px'
      }
    },
    MuiPaper:{
      root:{
        backgroundColor: 'rgba(0,0,0,0.4)',
      }
    },
    MuiListItemText:{
      primary:{
        color:' #fff',
      }
    }
 
  },
});