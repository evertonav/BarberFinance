import { TextField } from '@mui/material'
import type { ChangeEventHandler, ReactNode } from 'react'
import type { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface InputCommonMUIProps {
  title: string
  placeHolder?: string
  register?: UseFormRegister<any>
  error?: string
  rules?: RegisterOptions
  name?: string
  handlerOnChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  value?: ReactNode
}

export default function InputCommonMUI({
  title,
  register,
  error,
  rules,
  name,
  handlerOnChange,
  placeHolder,
  value,
}: InputCommonMUIProps) {
  return (
    <TextField
      id={name}
      label={title}
      {...(register ? register(name ?? '', rules) : {})}
      error={error !== undefined}
      helperText={error ? error : ''}
      onChange={handlerOnChange}
      placeholder={placeHolder}
      sx={{
        width: '100%',

        '& .MuiInputLabel-root': {
          color: '#555',
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
      }}
      variant="outlined"
      value={value}
      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}
    />
  )
}
