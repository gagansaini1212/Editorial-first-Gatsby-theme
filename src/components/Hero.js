import React from 'react';
import styled from 'styled-components';
import HeroText from './HeroText';
import Image from '../images/pic10.jpg';

const Main = styled.div`
    border-bottom: 2px solid #DCE0E2;
    padding: 0em 0em 2em;
`;

const sideWidth="650px";
const sideHeight="350px";

const Hero = () => (
    <section className="section">
        <Main className="container">
            <div className="columns">
                <div className="column is-half"><HeroText /></div>
                <div className="column is-half">
                    <img src={Image} alt="" width={sideWidth} height={sideHeight} />
                </div>
            </div>
        </Main>
    </section>
)

export default Hero