import styled from "styled-components"



const ContentStyled = styled("div")`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    border: 1px solid black;
    background-color: #fafafa;
    transition: all .2s linear;
    box-shadow: 2px 2px 4px 4px gray;
    &:hover{
        box-shadow: 2px 2px  2px 2px gray;
        transition: all .2s linear;
    }
`


export { ContentStyled }