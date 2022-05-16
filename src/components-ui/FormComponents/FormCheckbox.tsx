import { FC } from 'react';
import {Control, Controller} from "react-hook-form";
import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";

type FormCheckboxProps = CheckboxProps & {
  name: string;
  control: Control;
  label?: string;
};

const FormCheckbox:FC<FormCheckboxProps> = ((props) => {
  const { name, control, label } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => field.onChange(e.target.checked)}
              checked={field.value || false}
              {...props}

            />}
          label={label}
        />
      )}
    />
  )
});

export default FormCheckbox;