import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(() => ({
  fixedLabel: {
    minWidth: 130,
  },
  formControl: {
    minWidth: 100,
  },
}));

export default function SelectLang({ language, setLanguage }) {
  const classes = useStyles();

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };
  console.log(language);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">언어</InputLabel>
        <Select
          value={language}
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
