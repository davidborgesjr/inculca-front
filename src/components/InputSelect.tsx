import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ISelectCombo } from '../model/SelectCombo';
import { IInputSelectParameters } from '../model/IInputSelectParameters';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function InputSelect({
  optionsItem = [],
  labelName = 'Label Name',
  handleFunction,
}: IInputSelectParameters) {
  const classes = useStyles();

  const [value, setValue] = useState('');

  const handleChange = event => {
    const newValue = event.target.value;
    setValue(newValue);
    if (handleFunction) {
      handleFunction(newValue);
    }
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{labelName}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
          style={{ minWidth: '400px' }}
        >
          {optionsItem.map((option: ISelectCombo) => {
            return (
              <MenuItem key={option.id} value={option.id}>
                {option.description}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}
