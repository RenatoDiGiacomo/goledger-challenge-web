import styled from "styled-components"


const HeaderContainerStyled = styled("header")`
    width: 100%;
    height: 72px;
    background: linear-gradient(to right, #4267B2,#34495E);
`
const HeaderRowStyled = styled("div")`
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 1.5rem;
    align-items: center;
    justify-items: center;
    vertical-align: middle;
    `
const HeaderLogoStyled = styled("img")`
    width: 32px;
    align-self: top;
    height: auto;
    background-color: #2C2F33;
    border-radius: 50%;
    border: 6px solid #2C2F33 outset;
    outline: thick solid #2C2F33;
`
const HeaderSearchBarFormStyled = styled("form")`
    display: flex;
    gap: 12px;
    padding: 0 12px;
`
const HeaderSearchBarInputStyled = styled("input")`
    padding: .5rem 1.2rem;
    border: none;
    border-radius: 16px;
    font-weight: 600;
    outline: none;
`
const HeaderSearchBarBtnStyled = styled("input")`
    cursor: pointer;
    padding: .5rem 1.2rem;
    border: none;
    border-radius: 16px;
    font-weight: 600;
    background-color: #ECF0F1;
    transition: all .2s linear;
    &:active{
        background-color: black;
        color: #ECF0F1;
        transition: all .2s linear;
    }

`
export {
    HeaderContainerStyled,
    HeaderRowStyled,
    HeaderLogoStyled,
    HeaderSearchBarFormStyled,
    HeaderSearchBarInputStyled,
    HeaderSearchBarBtnStyled
}