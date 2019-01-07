import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
    border: 2px solid #FF555E;
    width: 7.5rem;
    height: 2.4rem;
    `;

export default class Button extends React.Component {
    render() {
        const text = 'learn more';
        
        return(
            <div>
                <Wrapper className="button is-outlined is-uppercase	has-text-danger is-size-7">{text}</Wrapper>
            </div>
        );
    }
}