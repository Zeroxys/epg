import {css} from '@emotion/react'

export const buttonStyles = () => {
  return {
    wrapper : css`
    background: #8c54ff;
    border: 0;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 30px;
    padding: 10px 15px;
    text-align:center;
    transition: transform 100ms ease-out;
      &:hover {
        background: #682ede;
        transform: scale(1.1);
      }
    `
  }
}

