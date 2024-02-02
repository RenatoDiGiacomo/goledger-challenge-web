import React from 'react'
import ArtistAbout from './ArtistAbout'
import { ContentStyled } from './style'
import { Link } from 'react-router-dom'
import { ContainerStyled } from '../style'

const ArtistContent = ({ itemData }) => {
  const handleArtist = () => {

    console.log(itemData["@key"])
  }
  return (

    <ContentStyled to={`/artist/${itemData["@key"]}`} onClick={handleArtist}>
      <h2>{itemData.name}</h2>
      <ArtistAbout itemAbout={itemData.about} />
    </ContentStyled>

  )
}

export default ArtistContent