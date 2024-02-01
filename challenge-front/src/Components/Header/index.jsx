import React from 'react'
import {
    HeaderContainerStyled,
    HeaderRowStyled,
    HeaderLogoStyled,
    HeaderSearchBarFormStyled,
    HeaderSearchBarInputStyled,
    HeaderSearchBarBtnStyled
} from './style';

import Logo from "../../Assets/Images/Logo.png"

const Header = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Sended?")
    }

    return (
        <HeaderContainerStyled>
            <HeaderRowStyled>
                <HeaderLogoStyled src={Logo} />
                <HeaderSearchBarFormStyled method='GET' onSubmit={handleSubmit}>
                    <HeaderSearchBarInputStyled type='text' placeholder='Search Here' />
                    <HeaderSearchBarBtnStyled type='submit' value={"Search"} />
                </HeaderSearchBarFormStyled>
            </HeaderRowStyled>
        </HeaderContainerStyled>
    )
}

export default Header