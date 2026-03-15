import type { InputCommonMUIProps } from './InputCommonMUI'
import InputCommonMUI from './InputCommonMUI'

export function InputNumber({ ...rest }: Omit<InputCommonMUIProps, 'type'>) {
  return (
    <InputCommonMUI
      type="number"
      inputMode={rest.inputMode ? rest.inputMode : 'numeric'}
      onKeyDown={(e) => {
        if (['e', 'E', '+', '-'].includes(e.key)) {
          e.preventDefault()
        }

        rest.onKeyDown && rest.onKeyDown(e)
      }}
      sx={{
        '& input[type=number]': {
          MozAppearance: 'textfield',
        },
        '& input[type=number]::-webkit-outer-spin-button': {
          WebkitAppearance: 'none',
          margin: 0,
        },
        '& input[type=number]::-webkit-inner-spin-button': {
          WebkitAppearance: 'none',
          margin: 0,
        },
      }}
      {...rest}
    />
  )
}
