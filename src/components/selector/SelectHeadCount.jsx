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

export default function SelectHeadCount() {
  const classes = useStyles();
  const [state, setState] = useState('');

  const handleChange = (e) => {
    const headCount = e.target.value;
    setState({
      [headCount]: e.target.value,
    });
  };
  console.log(state);


  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">모집 인원</InputLabel>
        <Select
          value={state.headCount}
          onChange={handleChange}
          className={classes.fixedLabel}
          defaultValue=""
          id="grouped-select"
        >
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
