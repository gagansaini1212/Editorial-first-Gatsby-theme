import React from 'react';
import styled from 'styled-components';
import LowerComponents from './LowerComponents';
import firstImage from '../images/pic01.jpg';
import secondImage from '../images/pic02.jpg';
import thirdImage from '../images/pic03.jpg';
import fourthImage from '../images/pic04.jpg';
import fifthImage from '../images/sou.jpg';
import sixthImage from '../images/pic06.jpg';

const Section = styled.section`
    font-family: 'Roboto Slab', serif;
    padding: 2rem 1.5rem !important;
    .container-title {
        border-bottom: 3px solid #FF555E;
        font-family: 'Roboto Slab', serif;
        padding: 0 0.8em 0.5em 0;
    }
`;

const LowerSection = () => (
    <Section className="section">
        <div className="container">
            <h4 className="title is-4"><span className="container-title">Ipsum sed dolor</span></h4>
            <div className="columns">
                <div className="column">
                    <LowerComponents text ="Interdum aenean" image={firstImage} />
                </div>
                <div className="column">
                    <LowerComponents text="Nulla amet dolore" image={secondImage} />
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <LowerComponents text="Tempus ullamcorper" image={thirdImage} />
                </div>
                <div className="column">
                    <LowerComponents text="Sed etiam facilis" image={fourthImage} />
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <LowerComponents text="Feugiat lorem aenean" image={fifthImage} />
                </div>
                <div className="column">
                    <LowerComponents text="Amet varius aliquam" image={sixthImage} />
                </div>
            </div>
        </div>
    </Section>
)

export default LowerSection