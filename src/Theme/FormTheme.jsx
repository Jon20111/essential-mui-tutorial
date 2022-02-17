import { createTheme } from "@mui/material/styles";

const FormTheme = createTheme({
  palette: {
    primary: {
      main: '#FDE992'
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: 4
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: 300,
          margin: 4,
          "& .MuiOutlinedInput-notchedOutline": {
              borderColor: 'green'
          },
          "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: 'yellow'
          }
        },
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          margin: 4
        }
      }
    }
  }
});

export { FormTheme };
