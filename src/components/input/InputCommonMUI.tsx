import { TextField, type TextFieldProps } from '@mui/material'
import type { UseFormRegisterReturn } from 'react-hook-form'

export type InputCommonMUIProps = TextFieldProps & {
  title: string
  register?: UseFormRegisterReturn
}

export default function InputCommonMUI({
  title,
  register,
  sx,
  ...rest
}: InputCommonMUIProps) {
  return (
    <TextField
      label={title}
      {...register}
      {...rest}
      sx={{
        width: '100%',

        '& .MuiInputLabel-root': {
          color: '#555',
        },

        '& .MuiInputLabel-root.Mui-focused': {
          color: '#555',
        },

        '& .MuiInputLabel-root.Mui-error': {
          color: '#d32f2f',
        },

        '& .MuiOutlinedInput-root': {
          borderRadius: '8px',
          fontSize: '14px',

          '& fieldset': {
            border: '1px solid #d9d9d9',
          },

          '&:hover fieldset': {
            borderColor: '#bfbfbf',
          },

          '&.Mui-focused fieldset': {
            borderColor: '#28a745',
          },
        },
        ...sx,
      }}
      variant="outlined"
      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}
    />
  )
}
