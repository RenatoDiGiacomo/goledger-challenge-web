import { Link } from "react-router-dom";
import styled from "styled-components";

const ArtistContainerSytled = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 21px;
    padding: 1rem 1.5rem;
    justify-content: center;
    align-items: center;
    position: relative;
`
const ArtistBackBtnSytled = styled(Link)`
    position: absolute;
    left: 0;
    top: 0;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 2px solid white;
    border-radius: 12px;
    color: white;
    transition: all .2s linear;
    &:hover{
        background-color: white;
        color: black;
        transition: all .2s linear;
    }
`
export { ArtistContainerSytled, ArtistBackBtnSytled }