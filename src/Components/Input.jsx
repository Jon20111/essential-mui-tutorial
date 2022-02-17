import React, { useCallback, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import { ThemeProvider } from "@mui/material/styles";
import { FormTheme } from "../Theme/FormTheme";
import { developers } from "../Store/Store";

const formStyle = {
  border: `2px solid ${FormTheme.palette.primary.main}`, 
  borderRadius: '4px',
  padding: 12, 
  maxWidth: 400
}

const Input = (props) => {

  const [devName, setDevName] = useState('');
  const [devTech, setDevTech] = useState('');
  const [devWork, setDevWork] = useState('owner');

  const handleTextFieldChange = (event) => {
    setDevName(event.target.value);
  }

  const handleAutoCompleteChange = (event, value) => {
    setDevTech(value);
  }

  const handleRadioChange = (event) => {
    setDevWork(event.target.value);
  }

  const handleButtonClick = useCallback(() => {
    developers.push({name: devName, tech: devTech, work: devWork});
  }, [devName, devTech, devWork]);

  return (
    <ThemeProvider theme={FormTheme}>
    <form style={formStyle}>
      <Typography variant="h6">Developer Info:</Typography>
      <TextField id="name" label="Name" variant="outlined" onChange={handleTextFieldChange} />
      <Autocomplete
        options={["React", "Angular", "Vue", "jQuery", "Something Else"]}
        getOptionLabel={(option) => option}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              variant="outlined"
              label="JS Tech"
            />
          );
        }}
        onChange={handleAutoCompleteChange}
      />
      <Stack direction='row' sx={{justifyContent: 'space-between', alignItems: 'flex-end'}}>
      <FormControl component="fieldset" variant="filled">
          <FormLabel component="legend" htmlFor="work-type-radio">
            Work Situation
          </FormLabel>
          <RadioGroup
            aria-label="work"
            id="work-type-radio"
            defaultValue="Self-Employed"
            name="radio-buttons-group"
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="Self-Employed"
              control={<Radio />}
              label="Self-Employed"
            />
            <FormControlLabel
              value="Employee"
              control={<Radio />}
              label="Employee"
            />
            <FormControlLabel value="Freelancer" control={<Radio />} label="Freelancer" />
          </RadioGroup>
        </FormControl>
        <Button variant='contained' onClick={handleButtonClick} >Save</Button>
        </Stack>
    </form>
    </ThemeProvider>
  );
};

export default Input;
