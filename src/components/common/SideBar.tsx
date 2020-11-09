import { log } from 'console';
import React from 'react';
import styled from 'styled-components';

const SideBarBlock = styled.div`
    position: fixed;
    z-index: 9999;
    width: 20rem;
    border-right: 1px solid #af8c7d;
    top: 3.6rem;
    bottom: 0;
`;
const StyledUl = styled.ul`
    list-style-type: none;
    padding: 0px;
`;
function SideBar() {
    return (
        <SideBarBlock>
            <StyledUl>
                <li>0</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </StyledUl>
        </SideBarBlock>
    );
}

export default SideBar;
