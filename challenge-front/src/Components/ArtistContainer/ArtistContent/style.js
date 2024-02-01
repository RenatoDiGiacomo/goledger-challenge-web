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
    border: 1px solid black;
    background-color: #fafafa;
    color: black;
    text-decoration: none;
    transition: all .2s linear;
    box-shadow: 2px 2px 4px 4px gray;

    &:hover{
        box-shadow: 2px 2px  2px 2px gray;
        transition: all .2s linear;
    }
`


export { ContentStyled }