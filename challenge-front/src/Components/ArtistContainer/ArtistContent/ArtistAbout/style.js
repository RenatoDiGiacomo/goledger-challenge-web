import styled from "styled-components"



const AboutTextStyled = styled("p")`
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`


export { AboutTextStyled }