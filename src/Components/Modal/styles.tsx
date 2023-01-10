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
      background: #fff;
      border-radius: 5px;
      max-width: 100%;
      margin: 50px auto;
      padding: 15px;
      width: 560px;
    `
  }
}


// .modal__title {
// 	font-size: 18px;
// 	font-weight: 600;
// 	margin-bottom: 25px;
// }

// a {
// 	border-radius: 5px;
// 	color: #682ede;
// 	font-weight: 600;
// 	padding: 2px 4px;
// 	margin-left: -2px;
// 	margin-right: -2px;
	
// 	&:hover {
// 		background: #8c54ff;
// 		color: #fff;
// 		text-decoration: none;
// 	}
// }