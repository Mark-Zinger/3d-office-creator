import { FC } from 'react';
import {Control, Controller} from "react-hook-form";
import {TextField, TextFieldProps} from "@mui/material";

type FormInputProps = TextFieldProps & {
  name: string;
  control: Control;
  label?: string;
};

const FormInput:FC<FormInputProps> = ((props) => {
  const { name, control, label } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({
         field: { onChange, value },
         fieldState: { error },
       }) => (
        <UnControlledFormInput
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value || ''}
          label={label}
          {...props}
        />
      )}
    />
  )
});


export const UnControlledFormInput:FC<TextFieldProps> = ((props) => {
  return (
    <TextField
      variant="filled"
      InputProps={{ disableUnderline: true }}
      color="primary"
      fullWidth
      {...props}
    />
  );
});

export default FormInput;