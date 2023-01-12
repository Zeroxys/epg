import React from 'react'
import { bannerStyles } from './styles'

const Banner = ({
  name, 
  unix_begin, 
  unix_end, 
  description
}) => {
  const styles = bannerStyles()
  return (
    <div css={styles.container}>
      <h2>{name}</h2>
      <div css={styles.contentWrapper}>
        <p>{unix_begin}</p>
        <p>{unix_end}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Banner
