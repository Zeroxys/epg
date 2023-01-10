import React, {useEffect} from 'react'
import {css} from '@emotion/react'

import { modalStyles } from './styles';

export const Modal = ({children, onRequestClose}) => {

  const styles = modalStyles()

  useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				// Close the modal when the Escape key is pressed
				onRequestClose();
			}
		}

		// Prevent scolling
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onKeyDown);

		// Clear things up when unmounting this component
		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onKeyDown);
		};
	});

  return (
		<div css={styles.modal_backdrop}>
			<div css={styles.modal_container}>
        {children}
			</div>
		</div>
	);
}
