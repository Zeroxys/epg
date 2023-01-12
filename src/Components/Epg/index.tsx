import React, { useState } from "react";
import UseEpg from '../../hooks/UseEpg'
import Button from "../Button";
import Banner from "./Banner";
import { Modal } from "../Modal";
import { epgStyles } from "./styles";''

const styles = epgStyles()

const Epg = () => {
  const [eventSelected, setEventSelected] = useState({})
  const [isModalOpen, setModalIsOpen] = useState(false);
  const { channels, total} = UseEpg()

  const toggleModal = () => {
		setModalIsOpen(!isModalOpen);
	};

  return <>
    <Button onClick={toggleModal}/>
    {isModalOpen && <Modal onRequestClose={toggleModal}>
      <div>
        <p css={styles.modalTitle}>
          Can be closed by press the esc key
				</p>

        <Banner {...eventSelected}/>


        <div css={styles.tableScrollWrapper}>
          <table>
            <thead>
              {/* <tr>
                <th colSpan={headerSpan} />
                {cells}
              </tr> */}
            </thead>
            <tbody style={{width:'calc(100%-600px)px'}}>
            {channels?.map( channel => {
            const {name, image, events, id} =  channel
            return (
              <div key={id} css={styles.channel}>
                <div css={styles.channelContainer}>
                  <h3>{name}</h3>
                  <img src={image} alt={name} css={styles.channelImage}/>
                </div>

                <div css={styles.eventsWrapper}>
                  <div css={styles.eventsHorizontalScroll}>
                    {events?.map((event) => {
                      const {
                        name,
                        description,
                        unix_begin, 
                        date_begin,
                        id,
                        duration,
                        language, 
                        date_end} = event
                      return (
                        <div onMouseEnter={() => {
                          console.log(event)
                          setEventSelected({
                            name,
                            description,
                            unix_begin, 
                            date_begin,
                            duration,
                            language, 
                            date_end
                          })
                        }} key={id} css={styles.events}>
                          <div style={{border:'1px solid red', width:200, overflow:'hidden'}}>
                            <p>{name}</p>
                            <p>{date_begin.split(' ')[1]}</p>
                            <p>{date_end.split(' ')[1]}</p>
                          </div>
                      </div>
                      )
                    })}
                  </div>
                </div>

              </div>
              )
            })}
            </tbody>
          </table>
        </div>


      </div>
    </Modal>}
    </>
};

export default Epg;

