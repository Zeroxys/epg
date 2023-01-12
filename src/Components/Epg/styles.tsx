import {css} from '@emotion/react'

export const epgStyles = () => {
  return {
    tableScrollWrapper : css`
     height: 60vh;
     overflow:auto;  
    ` ,
    wrapper : css`
    background: #8c54ff;
    `,
    modalTitle : css`
      font-size: 22px;
      text-align: center;
      font-weight: 600;
      margin-bottom: 25px;
    `,
    channel : css`
      display:flex;
      justify-content: flex-start;
      width:95%;
    `,
    channelContainer : css`
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid white;
      width: 500px;
    `,
    channelImage : css`
      width: 180px;
    `,
    eventsWrapper : css`
      display: flex;
      align-items: center;
      flex-direction: row;
      width: 50%;
      border:1px solid gray;
    `,
    eventsHorizontalScroll : css`
      display: flex;
      flex-direction: row;
      // width: calc(100% - 600)px;
      overflow:auto;
    `,
    events: css`
      // display: flex;
      // flex-direction: row;
      // align-items:center;
      border:1px solid white;
      // width : 280px;
    `
  }
}

