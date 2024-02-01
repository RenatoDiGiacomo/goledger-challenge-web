import React from 'react'
import ArtistAbout from './ArtistAbout'
import { ContentStyled } from './style'
import { Link } from 'react-router-dom'

const ArtistContent = ({ itemData }) => {
  const handleArtist = () => {

    console.log(itemData["@key"])
  }
  return (
    <ContentStyled onClick={handleArtist} >
      <Link to={`/artist/${itemData["@key"]}`}>
        <h2>{itemData.name}</h2>
        <ArtistAbout itemAbout={itemData.about} />
      </Link>
    </ContentStyled>
  )
}

export default ArtistContent