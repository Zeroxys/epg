import React from 'react'
import { buttonStyles } from './styles'
import UseEpg from '../../hooks/UseEpg'

const Button = ({onClick}) => {
  const { loading } = UseEpg()
  const styles = buttonStyles()

  return (<button disabled={!loading} onClick={onClick} css={styles.wrapper}>
    <p>{loading ? 'Mostrar EPG' : 'Cargando...'}</p>
  </button>)
}

export default Button
