import React, {useEffect, useState} from "react";
import EpgContext from "../context/EpgContext";
import Epg from "../Components/Epg";
import {css} from '@emotion/react'
import { getDate } from "../helpers";

const url = `https://mfwkweb-api.clarovideo.net/services/epg/channel?
device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&
format=json&device_manufacturer=generic&authpn=webclient&
authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=web61144bb49d549&user_id=54343080&
date_from=${getDate().start}&date_to=${getDate().end}&quantity=20`

getDate()

const mainStyles = css`
  display: flex;
  width: 100%;
  height:100vh;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, Roboto, sans-serif, serif;
`

const IndexPage = () => {

  const [channels, setChannels] = useState({
    loading: false
  })

  useEffect(() => {
    fetch(url)
  .then(response => response.json())
  .then(data => {
    const {response} = data
    setChannels({
      ...response,
      loading : true
    })
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
