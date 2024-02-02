import React from 'react'

const ArtistAlbuns = ({ dataAlbuns }) => {
    return (
        <div>{dataAlbuns && dataAlbuns.title}</div>
    )
}

export default ArtistAlbuns