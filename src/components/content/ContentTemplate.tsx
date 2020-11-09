import React from 'react';
import styled from 'styled-components';
import Content from './Content';

const ContentTemplateBlock = styled.div`
    padding-left: 20rem;
    padding-top: 3.6rem;
`;

function ContentTemplate() {
    return (
        <ContentTemplateBlock>
            <Content />
        </ContentTemplateBlock>
    );
}

export default ContentTemplate;
