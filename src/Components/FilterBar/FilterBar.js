import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const FilterBar = (props) => {

  const onFilterTag = (ev, va) => {
    props.onFilterTag(va)
  }

  return (
    <Autocomplete
      id="combo-box-demo"
      options={props.tagsList}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
      onChange={onFilterTag}
    />
  );
}

export default FilterBar