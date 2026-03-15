import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from 'react-hook-form'
import { DateCommomMui } from './DateCommomMui'
import type { DatePickerProps } from '@mui/x-date-pickers'
import dayjs from 'dayjs'

interface DateWithControllerProps<T extends FieldValues> extends Omit<
  DatePickerProps,
  'value' | 'onChange'
> {
  name: Path<T>
  control: Control<T>
}

export function DateWithController<T extends FieldValues>({
  name,
  control,
  slotProps,
  label,
  ...rest
}: DateWithControllerProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <DateCommomMui
          label={label}
          value={field.value ? dayjs(field.value) : null}
          onChange={(value) => field.onChange(value?.toDate())}
          slotProps={{
            textField: {
              error: !!fieldState.error,
              helperText: fieldState.error?.message,
            },
            ...slotProps,
          }}
          {...rest}
        />
      )}
    />
  )
}
