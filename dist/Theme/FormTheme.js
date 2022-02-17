"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormTheme = void 0;

var _styles = require("@mui/material/styles");

const FormTheme = (0, _styles.createTheme)({
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
        }
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
exports.FormTheme = FormTheme;