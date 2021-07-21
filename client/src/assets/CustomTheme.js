import {createTheme} from '@material-ui/core/styles'
const Theme = createTheme({
    direction: 'rtl',
    typography:{
    fontFamily:'IRANSans' 
    },
    palette: {
      primary:{
        main :'#2FE92B'
      },
      secondary:{
        main: '#e1bb23'

      }
    },
  });

export default Theme