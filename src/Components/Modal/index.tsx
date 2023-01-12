import React, {useEffect} from 'react'
import { modalStyles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXmark
} from '@fortawesome/free-solid-svg-icons'

export const Modal = ({children, onRequestClose}) => {
  const styles = modalStyles()

  useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				onRequestClose();
			}
		}

		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onKeyDown);

		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onKeyDown);
		};
	});

  return (
		<div css={styles.modal_backdrop}>
			<div css={styles.modal_container}>
				<div css={styles.close_button}>
					<FontAwesomeIcon icon={faXmark} size="2x" onClick={onRequestClose} />
				</div>
        {children}
			</div>
		</div>
	);
}
