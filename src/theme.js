import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  colorSchemes: {
    light: {},
    dark: {}
  },
  components: {
    // custom scrollbar style
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          body: {
            '*::-webkit-scrollbar': {
              width: '8px',
              height: '8px'
            },
            '*::-webkit-scrollbar-thumb': {
              backgroundColor: '#dcdde1',
              borderRadius: '4px'
            },
            '*::-webkit-scrollbar-thumb:hover': { backgroundColor: 'white' }
          }
        }
      }
    },
    //custom button style
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWidth: '0.5px !important'
        }
      }
    },
    //custom outline input style
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline': {},
          '&:hover': { '.MuiOutlinedInput-notchedOutline': {} },
          '& fieldset': { borderWidth: '0.5px !important' },
          '&:hover fieldset': { borderWidth: '1px !important' },
          '&.Mui-focused fieldset': { borderWidth: '1px !important' }
        })
      }
    },
    //custom input table style
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({ fontSize: '0.875rem' })
      }
    }
  }
})

export default theme
