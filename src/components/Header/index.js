import React from "react";

import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'

import { TMDBlogImg, LogoImg, Content, Wrapper } from './Header.style'

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={RMDBLogo} alt='' />
            <TMDBlogImg src={TMDBLogo} alt=''/>


        </Content>
    </Wrapper>
)

export default Header;


