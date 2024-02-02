import React from 'react'
import { AboutTextStyled } from './style'

const ArtistAbout = ({ itemAbout }) => {
  if (itemAbout !== "") {
    return (
      <AboutTextStyled title={itemAbout}>{itemAbout}</AboutTextStyled>
    )

  } else {
    return (
      <p>No Description Created</p>
    )
  }
}

export default ArtistAbout