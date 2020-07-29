import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(() => ({
  fixedLabel:{
    minWidth:130, 
  },
  formControl: {
    minWidth: 100,
  },
}));


export default function SelectLang() {
  const classes = useStyles();
  const [state, setState] = useState('');

  const handleChange = (e) => {
    const language = e.target.value;
    setState({
      [language]: e.target.value,
    });
  };
  console.log(state);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">언어</InputLabel>
        <Select 
          value={state.language}
          onChange={handleChange}
          className={classes.fixedLabel}  
          defaultValue="" 
          id="grouped-select"
          >
          <MenuItem value="C">C</MenuItem>
          <MenuItem value="C#">C#</MenuItem>
          <MenuItem value="C++">C++</MenuItem>
          <MenuItem value="Java">Java</MenuItem>
          <MenuItem value="Javascript">Javascript</MenuItem>
          <MenuItem value="Python">Python</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}