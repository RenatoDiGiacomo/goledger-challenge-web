import React from 'react'

const ArtistSongs = ({ dataSongs }) => {

    return (
        <p>
            {dataSongs.map(item=>(
                <p>{item.title}</p>
            ))}
        </p>
    )
}

export default ArtistSongs