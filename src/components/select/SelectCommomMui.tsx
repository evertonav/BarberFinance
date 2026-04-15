import { Select, type SelectProps } from '@mui/material'

export function SelectCommomMui({ children, sx, ...rest }: SelectProps) {
  return (
    <Select
      sx={{
        fontSize: '0.8rem',
        fontWeight: 600,
        color: 'hsl(220 15% 20%)',
        bgcolor: 'hsl(140 15% 92%)',
        borderRadius: '0.75rem',

        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#28a745',
        },

        '.MuiOutlinedInput-notchedOutline': {
          borderColor: 'hsl(140 10% 90%)',
        },

        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: 'hsl(220 10% 50%)',
        },

        '.MuiSelect-select': {
          padding: '6px 10px',
        },

        ...sx,
      }}
      {...rest}
    >
      {children}
    </Select>
  )
}
