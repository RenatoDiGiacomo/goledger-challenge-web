import styled from "styled-components"

const ArtistAboutContainerStyled = styled("div")`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-top: 3rem;
    background-color: #0e0e0e;
    border-radius: 12px;
    text-align: center;
    gap: 12px;
    position: relative;
`
const ArtistTitleStyled = styled("h1")`
    font-size: 52px;
`
const ArtistAboutTextStyled = styled("p")`
    font-size: 21px;
    font-weight: 600;
`
const ArtistDataContainerStyled = styled("div")`
`
const ArtistActionsStyled = styled("div")`
    display: flex;
    gap: 12px;
    position: absolute;
    right: 12px;

`
const ArtistDeleteStyled = styled("div")`
    cursor: pointer;
    & > svg{
        fill: darkred;
    }
    &:hover svg{
        fill: red;
    }
`
const ArtistEditStyled = styled("div")`
    cursor: pointer;
    & > svg{
     stroke: darkgreen;
    }
    &:hover svg{
        stroke: green;
    }
`



export {
    ArtistAboutContainerStyled,
    ArtistTitleStyled,
    ArtistAboutTextStyled,
    ArtistDataContainerStyled,
    ArtistActionsStyled,
    ArtistDeleteStyled,
    ArtistEditStyled
}