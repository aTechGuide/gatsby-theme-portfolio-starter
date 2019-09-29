import {primary, secondary} from './themeColors'; //<- Destructuring the imported object

const theme = {
  palette: {
    primary: primary,
    secondary: secondary
  },
  typography: {
    fontSize: 16,
    h1 : {
      fontSize: "3rem",
      fontWeight: 500,
      color: primary[500]
    },
    h5 : {
      color: secondary[900]
    }
  },
  button: {
    color: "primary",
    variant: "contained"
  }
}

export default theme