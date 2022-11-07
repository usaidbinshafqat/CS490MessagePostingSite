import { optionClasses } from "@mui/joy";
import {
  Autocomplete,
  Box,
  OutlinedInputProps,
  TextField,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { countries } from "./CountryArray";
import { CustomTextField } from "./CustomTextField";

export const CountryList = (props: any) => {
  const id = props.id;
  const change = props.onInputChange;

  return (
    <Autocomplete
      onInputChange={change}
      id={id}
      options={countries}
      getOptionLabel={(option: any) => option.name}
      fullWidth
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option.name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          style={{ marginTop: 5, marginBottom: 5 }}
          required
          label="Country"
          variant="filled"
          fullWidth
          InputProps={{ ...params.InputProps, disableUnderline: true }}
        />
      )}
    />
  );
};
