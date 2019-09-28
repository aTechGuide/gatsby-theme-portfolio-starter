import {blueGrey, cyan} from '@material-ui/core/colors/';

const primary = blueGrey
const secondary = cyan

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
  },
  postGridItemPadding: 16
}

export default theme