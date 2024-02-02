import styled from "styled-components"



const ModalOverlayStyled = styled("div")`
    display: ${({ modalDelete }) => modalDelete ? "flex" : "none"};
    left: 0;
    top: 0;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: #000000a2;
    justify-content: center;
    align-items: center;
`

const ContainerStyled = styled("div")`
    width: 75%;
    background-color: #0e0e0e;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 21px;
`

const TitleSytled = styled("h1")``

const TextStyled = styled("p")``

const BtnContainer = styled("div")`
    
    display: flex;
    width: 50%;
    justify-content: space-between;
`

const CancelBtnStyled = styled("div")`
    cursor:pointer;
    background-color: darkred;
    padding: .5rem 1rem;
    font-size: 18px;
    border-radius: 12px;
    transition: all .2s linear;
    &:hover{
        background-color: red;
        transition: all .2s linear;
    }
`

const AcceptBtnStyled = styled("div")`
    cursor:pointer;
    background-color: darkgreen;
    padding: .5rem 1rem;
    font-size: 18px;
    border-radius: 12px;
    transition: all .2s linear;
    &:hover{
        background-color: green;
        transition: all .2s linear;
    }
`

export {
    ModalOverlayStyled,
    ContainerStyled,
    TitleSytled,
    TextStyled,
    BtnContainer,
    CancelBtnStyled,
    AcceptBtnStyled
}