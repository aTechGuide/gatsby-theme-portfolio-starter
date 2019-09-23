import {blueGrey, indigo, yellow, cyan, lightGreen} from '@material-ui/core/colors/';

const theme = {
  palette: {
    primary: blueGrey,
    secondary: cyan
  },
  typography: {
    fontSize: 16,
    h1 : {
      fontSize: "3rem",
      fontWeight: 500,
      color: blueGrey[500]
    },
    h5 : {
      color: cyan[900]
    }
  },
  button: {
    color: "primary",
    variant: "contained"
  },
  linkTransition: {
    fade: "true",
    duration: .5
  },
  postGridItemPadding: '16px',
  headingColor: indigo,
  highlightOne: yellow,
  highlightTwo: cyan,
  highlightThree: lightGreen
}

export default theme