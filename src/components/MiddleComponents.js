import React from 'react';
import styled from 'styled-components';

const Comp = styled.div`
    h4, p {
        font-family: 'Roboto Slab', serif;
    }
    p {
        font-size: 0.93em !important;
        color: #7D868E;
        padding-right: 2.5em;
        font-weight: 300;
    }
    .icon {
        margin-top: 4em;
    }
`;

const MiddleComponent = ({ text, icon }) => (
    <Comp className="columns">
        <div className="column is-2">
            <span className="icon has-text-danger is-large">
               {icon}
            </span>
        </div>
        <div className="column">
            <h4 className="">{ text }</h4>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
        </div>
    </Comp>
)

export default MiddleComponent