import React from 'react'

const ArtistAbout = ({ itemAbout }) => {
  if (itemAbout !== "") {
    return (
      <p>{itemAbout}</p>
    )

  } else {
    return (
      <p>No Description Created</p>
    )
  }
}

export default ArtistAbout