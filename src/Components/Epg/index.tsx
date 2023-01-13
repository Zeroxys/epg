import React, { useState, useEffect } from "react";
import UseEpg from '../../hooks/UseEpg'
import Button from "../Button";
import Banner from "./Banner";
import { Modal } from "../Modal";
import { epgStyles } from "./styles";''

const Epg = () => {
  const [windowSize, setWindowSize] = useState([
    window?.innerWidth,
    window?.innerHeight,
  ]);
  const [eventSelected, setEventSelected] = useState({})
  const [isModalOpen, setModalIsOpen] = useState(false);
  const { channels, total} = UseEpg()

  const styles = epgStyles(windowSize)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window?.innerWidth, window?.innerHeight]);
    };
    window?.addEventListener('resize', handleWindowResize);
    return () => {
      window?.removeEventListener('resize', handleWindowResize);
    };
  });

  const toggleModal = () => {
		setModalIsOpen(!isModalOpen);
	};

  return <>
    <Button onClick={toggleModal}/>
    {isModalOpen && <Modal onRequestClose={toggleModal}>
      <div>
        <p css={styles.modalTitle}>
          Puedes cerrar el modal presioando 'esc'
				</p>
        <Banner {...eventSelected}/>

        <div css={styles.tableScrollWrapper}>
          <table style={{width:'100%'}}>
            <tbody>
                
              {channels?.map( channel => {
                const {name, image, events, id} =  channel
                return (
                  <div key={id} css={styles.channel}>
                    <div css={styles.channelContainer}>
                      <h3>{name}</h3>
                      <img src={image} alt={name} css={styles.channelImage}/>
                    </div>

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
                            <div css={styles.eventStyle}>
                              <p>{name}</p>
                              <div css={styles.eventTime}>
                                <p>{date_begin.split(' ')[1]}</p> -
                                <p>{date_end.split(' ')[1]}</p>
                              </div>
                            </div>
                        </div>
                        )
                      })}
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

