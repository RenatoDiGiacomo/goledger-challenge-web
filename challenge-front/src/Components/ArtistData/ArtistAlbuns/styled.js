import styled from "styled-components"



const AlbumContainer = styled("div")`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 21px;
    padding: 1rem;
    position: relative;
    `

const SongsListContainer = styled("div")`
    display:flex;
    flex-direction: column;
    padding: 1.5rem;
    justify-content: center;
    align-items: center;
    background-color: black;
    border-radius: 12px;
`
const AlbumSongsContainer = styled("div")`
    width: 100%;
    display:flex;
    flex-direction: column;
    gap: 6px;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    background-color: #0e0e0e;
    border-radius: 12px;
`


const AlbumSongTitleStyled = styled("h2")`
    margin-bottom: 1rem;
    text-align: center;
`

export { AlbumContainer, AlbumSongsContainer, SongsListContainer, AlbumSongTitleStyled }