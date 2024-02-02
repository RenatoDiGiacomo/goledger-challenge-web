import { Link } from "react-router-dom"
import styled from "styled-components"



const ContentStyled = styled(Link)`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 21px;
    padding: 1.5rem;
    border-radius: 12px;
    background-color: #1a1a1a;
    text-decoration: none;
    transition: all .2s linear;
    /* box-shadow: 1px 2px 4px 4px darkgrey; */

    &:hover{
        background-color: #272727;
        transition: all .2s linear;
    }
`


export { ContentStyled }