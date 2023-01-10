import React, {useState} from "react";
import UseEpg from '../../hooks/UseEpg'
import Button from "../Button";
import { Modal } from "../Modal";
import { epgStyles } from "./styles";

const styles = epgStyles()

// const TimeLine = (channel) => {
//   return (

//   )
// }

const Epg = () => {
  const { channels, total} = UseEpg()
  console.log(channels, total)
  const [isModalOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
		setModalIsOpen(!isModalOpen);
	};

  return <>
    <Button onClick={toggleModal}/>
    {isModalOpen && <Modal onRequestClose={toggleModal}>
      <div>
        <p>
					Epg tambien puede ser cerrado con la tecla esc.
				</p>

        {channels.map( channel => {
          const {name} =  channel
          return (
            <table>
              <thead>
                {/* <tr>
                  <th colSpan={headerSpan} />
                  {cells}
                </tr> */}
              </thead>
              <tbody>
                {name}
              </tbody>
            </table>
          )
        })}

      </div>
    </Modal>}
    </>
};

export default Epg;

