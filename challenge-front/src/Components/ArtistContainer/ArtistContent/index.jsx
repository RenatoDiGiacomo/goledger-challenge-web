import React from 'react'
import ArtistAbout from './ArtistAbout'
import { ContentStyled } from './style'


const ArtistContent = ({ itemData }) => {

  return (

    <ContentStyled to={`/artist/${itemData["@key"]}`}>
      <h2>{itemData.name}</h2>
      <ArtistAbout itemAbout={itemData.about} />
    </ContentStyled>

  )
}

export default ArtistContent