import React, { ReactChildren, ReactNode } from 'react';
import styled from 'styled-components';
import { JsxAttribute } from 'typescript';
type ResponsiveProps = {
    children?: ReactNode;
};
const ResponsiveBlock = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    width: 1600px;
    margin: 0 auto;
    @media (max-width: 1600px) {
        width: 1024px;
    }

    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

function Responsive({ children, ...rest }: ResponsiveProps) {
    return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
}

export default Responsive;
