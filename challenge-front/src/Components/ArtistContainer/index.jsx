import React from 'react'
import { ContainerStyled, ContainerContentStyled } from './style'
import ArtistContent from './ArtistContent'
import CreateArtist from '../CreateArtist'

const ArtistsContainer = ({ data }) => {



  if (data) {
    return (
      <ContainerStyled>
        <CreateArtist />
        <ContainerContentStyled>
          {data && data.map((item) => (
            <ArtistContent itemData={item} />
          ))}
        </ContainerContentStyled>
      </ContainerStyled>

    )
  }
}

export default ArtistsContainer