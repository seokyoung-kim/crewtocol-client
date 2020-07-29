import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 130,
  },
}));

export default function SelectLocal() {
  const classes = useStyles();
  const [state, setState] = useState('');

  const handleChange = (e) => {
    const location = e.target.value;
    setState({
      [location]: e.target.value,
    });
  };
  console.log(state);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">지역</InputLabel>
        <Select 
          value={state.location}
          onChange={handleChange}
          defaultValue="" 
          id="grouped-select"
          >
          <ListSubheader>서울특별시</ListSubheader>
          <MenuItem value="서울">서울</MenuItem>
          <ListSubheader>경기도</ListSubheader>
          <MenuItem value="수원시">수원시</MenuItem>
          <MenuItem value="안양시">안양시</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
