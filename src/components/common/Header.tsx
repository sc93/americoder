import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 3.6rem;
    border-bottom: 1px solid #af8c7d;
`;
const Logo = styled.a`
    font-size: 2rem;
    font-weight: 700;
    margin-left: 1rem;
    line-height: 1.8;
    color: #892323;
`;
const LinkMenu = styled.div`
    position: absolute;
    right: 3rem;
    top: 0;
    a {
        font-size: 1.5rem;
        line-height: 2.2;
        text-decoration: none;
        color: #892323;
    }
    a + a {
        margin-left: 2rem;
    }
`;

function Header() {
    return (
        <HeaderBlock>
            <Logo>Americoder</Logo>
            <LinkMenu>
                <a href="#">About</a>
                <a href="https://github.com/sc93">Github</a>
            </LinkMenu>
        </HeaderBlock>
    );
}

export default Header;
