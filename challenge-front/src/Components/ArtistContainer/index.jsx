import React from 'react'
import { ContainerStyled, ContainerContentStyled } from './style'
import ArtistContent from './ArtistContent'
import CreateModal from '../CreateModal'

const ArtistsContainer = ({ data }) => {

  if (data) {
    return (
      <ContainerStyled>
        <CreateModal />
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