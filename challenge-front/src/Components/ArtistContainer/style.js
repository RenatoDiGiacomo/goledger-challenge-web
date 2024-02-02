import styled from "styled-components"


const ContainerStyled = styled("div")``;
const ContainerContentStyled = styled("div")`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 2rem;
    margin: 1.5rem 0;
`


export {ContainerStyled, ContainerContentStyled }