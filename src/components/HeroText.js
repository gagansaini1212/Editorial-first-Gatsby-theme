import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const Wrapper = styled.div`
    @media screen and (min-width: 480px) {
        margin-right: 1.5em !important;
    }
    h1 {
        line-height: 1.3;
        margin-right: 0;
        @media screen and (min-width: 480px) {
            margin-right: 2em;
        }
    }
    h1,h6 {
        font-family: 'Roboto Slab', serif;
    }
    h6 {
        color: #7D868E;
        font-size: 0.85em !important;
        letter-spacing: 1px;
        margin-top: 0!important;
    }
    p {
        font-size: 0.93em !important;
        color: #7D868E;
        font-family: 'PT Sans', sans-serif;
        letter-spacing: 1px;
    }
`;

export default class HeroText extends React.Component {
    render() {
        return (
            <Wrapper>
                <h1 className="title is-1">Hi, I’m Editorial by HTML5 UP</h1>
                <h6 className="subtitle is-6">A FREE AND FULLY RESPONSIVE SITE TEMPLATE</h6>
                <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
                <Button />
            </Wrapper>
        );
    }
}