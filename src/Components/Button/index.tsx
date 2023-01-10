import React from 'react'
import { buttonStyles } from './styles'

const Button = ({onClick}) => {

  const styles = buttonStyles()

  return (<div onClick={onClick} css={styles.wrapper}>
    Mostrar EPG
  </div>)
}

export default Button

