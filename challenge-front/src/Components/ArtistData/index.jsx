import React from 'react'
import ArtistAlbuns from './ArtistAlbuns'
import ArtistSongs from './ArtistSongs/Index'

const ArtistData = ({ dataSongs, dataAlbuns }) => {
    console.log(dataSongs)
    return (
        <>
            <ArtistAlbuns dataAlbuns={dataAlbuns} />
            {dataSongs.map((item, index) => (

                <ArtistSongs key={index} dataSongs={item} />
            ))}
        </>
    )

}

export default ArtistData