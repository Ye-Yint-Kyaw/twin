// import React from "react";
// export interface InputType {
//   type: string;
//   name?: string;
//   placeholder?: string;
//   value?: string;
//   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
//   disabled?: boolean;
// }

// export const Input: React.FC<InputType> = ({
//   type,
//   name,
//   placeholder,
//   value,
//   onChange,
//   onBlur,
//   disabled,
// }) => {
//   return (
//     <input
//       type={type}
//       name={name}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       onBlur={onBlur}
//       disabled={disabled}
//       className="placeholder-text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset"
//     />
//   );
// };

import { Box, TextField } from "@mui/material";
import "./style.scss"
export interface InputType{
  type?: string;
  name?: string;
  error?: boolean;
  placeholder?: string;
  label?: string;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  errorText?: string;
  
}

export const Input: React.FC<InputType> = ({
  type,
  label,
  error,
  errorText

}) => {
  return (
    <div>
      <Box   
      sx={{
        width: 320,
        maxWidth: '100%',
      }}>
      <TextField
      error = {error}
      fullWidth
      label={label}
      type={type}
      variant="standard"
      helperText={errorText}
      />
      </Box>
    </div>
  );
}