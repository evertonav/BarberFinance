import { RoundedButton } from '../../../../components/button/RoundedButton'
import InputCommonMUI from '../../../../components/input/InputCommonMUI'
import { LabelTitle } from '../../../../components/labels/labelTitle/LabelTitle'
import { ContainerRounded } from '../../../../templates/containerRounded/ContainerRounded'
import { Header } from '../../../../templates/header/Header'
import style from './CadCorte.module.css'

interface CadCorteProps {
  onSuccess?: () => void
}

export function CadCorte({ onSuccess }: CadCorteProps) {
  return (
    <ContainerRounded className={style.container}>
      <Header className={style.headerColor}>
        <LabelTitle fontSize="20" color="Commom">
          Adicionar corte
        </LabelTitle>
      </Header>

      <div className={style.body}>
        <InputCommonMUI title="Quantidade " />

        <InputCommonMUI title="Valor (R$) " />

        <InputCommonMUI title="Data" />

        <RoundedButton
          className={style.buttonSave}
          onClick={() => onSuccess && onSuccess()}
        >
          Gravar
        </RoundedButton>
      </div>
    </ContainerRounded>
  )
}
