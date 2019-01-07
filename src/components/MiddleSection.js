import React from 'react';
import styled from 'styled-components';
import MiddleComponents from './MiddleComponents';

const Section = styled.section`
    .container-title {
        border-bottom: 3px solid #FF555E;
        font-family: 'Roboto Slab', serif;
        padding: 0 0.8em 0.5em 0;
    }
    .component {
        margin-top: 3em;
    }
`;
const Container = styled.div`
    border-bottom: 2px solid #DCE0E2;
    padding: 0em 0em 2em;
`;

const firstIcon = (<i className="far fa-2x fa-gem"></i>);
const secondIcon = (<i className="fab fa-2x fa-telegram-plane"></i>);
const thirdIcon = (<i className="fas fa-2x fa-rocket"></i>);
const fourthIcon = (<i className="fas fa-2x fa-signal"></i>);

const HeroBottom = () => (
    <Section className="section">
        <Container className="container">
            <h4 className="title is-4"><span className="container-title">Erat lacinia</span></h4>
            <div className="component columns">
                <div className="column">
                    <MiddleComponents text="Portitor ullamcorper" icon={firstIcon} />
                </div>
                <div className="column">
                    <MiddleComponents text="Sapien veroeros" icon={secondIcon} />
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <MiddleComponents text="Quam lorem ipsum" icon={thirdIcon} />
                </div>
                <div className="column">
                    <MiddleComponents text="Sed magna finibus" icon={fourthIcon} />
                </div>
            </div>
        </Container>
    </Section>
)

export default HeroBottom