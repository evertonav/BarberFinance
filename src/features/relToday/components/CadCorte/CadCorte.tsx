import { ButtonCommom } from '../../../../components/button/ButtonCommom'
import InputCommonMUI from '../../../../components/input/InputCommonMUI'
import { LabelTitle } from '../../../../components/labels/labelTitle/LabelTitle'
import { ContainerRounded } from '../../../../templates/containerRounded/ContainerRounded'
import { Header } from '../../../../templates/header/Header'
import style from './CadCorte.module.css'

interface CadCorteProps {
  onSuccess?: () => void
  onCancel?: () => void
}

export function CadCorte({ onSuccess, onCancel }: CadCorteProps) {
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

        <div className={style.containerButton}>
          <ButtonCommom
            styleFormat="Rounded"
            width="TamanhoTotal"
            type="Cancel"
            onClick={() => onCancel && onCancel()}
          >
            Cancelar
          </ButtonCommom>

          <ButtonCommom
            styleFormat="Rounded"
            width="TamanhoTotal"
            type="Success"
            onClick={() => onSuccess && onSuccess()}
          >
            Gravar
          </ButtonCommom>
        </div>
      </div>
    </ContainerRounded>
  )
}
