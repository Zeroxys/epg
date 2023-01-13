import {css} from '@emotion/react'

export const epgStyles = (windowSize) => {
  return {
    tableScrollWrapper : css`
     height: 50vh;
     overflow:auto;  
    ` ,
    wrapper : css`
    background: #8c54ff;
    `,
    modalTitle : css`
      height:5vh;
      font-size: 22px;
      text-align: center;
      font-weight: 600;
      margin-bottom: 25px;
    `,
    channel : css`
      display:flex;
      justify-content: flex-start;
    `,
    channelContainer : css`
      display: flex;
      justify-content: center;
      align-items: center;
      width:500px;;
      border:1px solid white;
    `,
    channelImage : css`
      width: 180px;
    `,

    eventsHorizontalScroll : css`
      width: ${windowSize[0] / 1.4}px;
      display: flex;
      flex-wrap: no-wrap;
      overflow-x: auto;
    `,
    events: css`
      display: flex;
      flex-direction: row;
      align-items:center;
      border:1px solid white;
      width : 280px;
    `,
    eventStyle : css`
      padding:30px;
      display:flex;
      flex-direction:column;
    `,
    eventTime : css`
      display:flex;
      align-items:center;
      justify-content:space-between;
    `
  }
}

