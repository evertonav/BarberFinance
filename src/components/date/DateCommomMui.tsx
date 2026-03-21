import { DatePicker, type DatePickerProps } from '@mui/x-date-pickers'

export function DateCommomMui({
  slotProps,
  format,
  sx,
  ...rest
}: DatePickerProps) {
  return (
    <DatePicker
      sx={sx}
      slotProps={{
        ...slotProps,
        day: {
          sx: {
            '&.Mui-selected': {
              backgroundColor: '#28a745 !important',
              color: '#fff',
            },
            '&.Mui-selected:hover': {
              backgroundColor: '#218838 !important',
            },
          },
        },

        textField: {
          InputLabelProps: {
            shrink: true,
          },
          sx: {
            '& .MuiInputLabel-root': {
              color: '#555',
            },

            '& .MuiInputLabel-root.Mui-focused': {
              color: '#555',
            },

            '& fieldset': {
              border: '1px solid #d9d9d9',
            },

            '& .MuiInputLabel-root.Mui-error': {
              color: '#d32f2f',
            },

            '&:hover .MuiPickersOutlinedInput-notchedOutline': {
              borderColor: '#bfbfbf',
            },

            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#28a745',
              },
              '&:hover fieldset': {
                borderColor: '#28a745',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#28a745',
              },
            },

            '& .MuiPickersOutlinedInput-root.Mui-focused .MuiPickersOutlinedInput-notchedOutline':
              {
                borderColor: '#28a745',
              },
          },

          InputProps: {
            sx: {
              borderRadius: '8px',
              fontSize: '14px',
            },
          },
          fullWidth: true,
        },
      }}
      format={format ? format : 'DD/MM/YYYY'}
      {...rest}
    />
  )
}
