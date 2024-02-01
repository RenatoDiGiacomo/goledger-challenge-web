import React from 'react'
import { ContainerStyled } from './style'
import ArtistContent from './ArtistContent'

const ArtistsContainer = ({ data }) => {



  if (data) {
    return (

      <ContainerStyled>
        {data && data.map((item) => (
          <ArtistContent itemData={item} />
        ))}
      </ContainerStyled>
    )
  }
}

export default ArtistsContainer