import {css} from '@emotion/react'

export const modalStyles = () => {
  return {
    modal_backdrop : css`
      background: rgba(0, 0, 0, .65);
      bottom: 0;
      left: 0;
      overflow: auto;
      position: fixed;
      right: 0;
      top: 0;
      z-index: 1;
    `,
    modal_container : css`
      background: black;
      color:white;
      border-radius: 5px;
      width: 100%;
      height: 100%;
      overflow: hidden;
    `,
    close_button : css`
      padding:20px;
      display:flex;
      justify-content: flex-end;
    `
  }
}
