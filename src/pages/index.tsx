import React, {useEffect, useState} from "react";
import EpgContext from "../context/EpgContext";
import Epg from "../Components/Epg";
import {css} from '@emotion/react'

const url = `https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=
web&device_model=web&device_type=web&device_so=Chrome&format=json&device_man
ufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=gua
temala&HKS=web61144bb49d549&user_id=54343080&date_from=20210812200256&date_
to=20210813200256&quantity=2`

const mainStyles = css`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const IndexPage = () => {

  const [channels, setChannels] = useState({})

  useEffect(() => {
    fetch(url)
  .then(response => response.json())
  .then(data => {
    const {response} = data
    setChannels(response)
  });
  }, [])

  return (
    <main css={mainStyles}>
      <EpgContext.Provider value={channels}>
          <Epg />    
      </EpgContext.Provider>
  </main>
  );
};

export default IndexPage;

export const Head = () => <title>Claro Epg</title>;
