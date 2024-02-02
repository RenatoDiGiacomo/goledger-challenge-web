import React from 'react'
import { SongTextStyled } from './styled';

const ArtistSongs = ({ dataSongs, albumId }) => {
    if (dataSongs) {
        const albumKey = dataSongs.album["@key"];

        if (albumKey === albumId) {
            return (
                <SongTextStyled>
                    {dataSongs.title}
                </SongTextStyled>
            )
        } else {

        }

    } else {
        return (
            <p>Nothing to show</p>
        );
    }
}

export default ArtistSongs