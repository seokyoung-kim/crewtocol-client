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

export default function SelectLocal({ location, setLocation }) {
  const classes = useStyles();

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">지역</InputLabel>
        <Select
          value={location}
          onChange={handleChange}
          defaultValue=""
          id="grouped-select"
        >
          <ListSubheader>서울특별시</ListSubheader>
            <MenuItem value="종로구">종로구</MenuItem>
            <MenuItem value="동작구">동작구</MenuItem>
            <MenuItem value="강남구">강남구</MenuItem>
            <MenuItem value="동대문구">동대문구</MenuItem>
            <MenuItem value="마포구">마포구</MenuItem>
          <ListSubheader>경기도</ListSubheader>
            <MenuItem value="수원시">수원시</MenuItem>
            <MenuItem value="성남시">성남시</MenuItem>
            <MenuItem value="안양시">안양시</MenuItem>
            <MenuItem value="부천시">부천시</MenuItem>
            <MenuItem value="고양시">고양시</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
