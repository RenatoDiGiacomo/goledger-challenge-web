import React from 'react';
import ArtistSongs from './ArtistSongs/Index';
import { AlbumContainer, AlbumSongsContainer, SongsListContainer, AlbumSongTitleStyled } from './styled';
import EditModal from '../../EditModal';



const ArtistAlbuns = ({ dataAlbuns, dataSongs, setModalDelete, modalDelete }) => {
    if (dataAlbuns) {
        return (
            <AlbumContainer>
                {dataAlbuns.map((itemAlbum, index) => (
                    <SongsListContainer key={index + itemAlbum["@key"]}>
                        <AlbumSongTitleStyled>{itemAlbum.title}</AlbumSongTitleStyled>
                        <AlbumSongsContainer>
                            {dataSongs.map((itemSong, index) => (
                                <ArtistSongs key={index + itemAlbum["@key"]} albumId={itemAlbum["@key"]} dataSongs={itemSong} />
                            ))}
                        </AlbumSongsContainer>
                    </SongsListContainer>
                ))}
                <EditModal modalDelete={modalDelete} setModalDelete={setModalDelete} />
            </AlbumContainer>
        )
    }
}

export default ArtistAlbuns