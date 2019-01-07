import React from 'react';
import ButtonMore from './ButtonMore';
import styled from 'styled-components';

const Wrapper = styled.div`
    h4 {
        font-family: 'Roboto Slab', serif;
    }
    p {
        font-size: 0.93em !important;
        color: #7D868E;
        padding-right: 2.5em;
        font-weight: 300;
    }
`;

const sideWidth="500px";
const sideLength="300px";

const LowerComponents = ({ text, image }) => (
    <Wrapper className="columns">
        <div className="column">
            <img src={image} alt="" width={sideWidth} lenght={sideLength} />
            <h4>{ text }</h4>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
            <ButtonMore />
        </div>
    </Wrapper>
)

export default LowerComponents