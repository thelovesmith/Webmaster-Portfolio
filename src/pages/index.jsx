/* global tw */
import React from 'react';
import styled from 'react-emotion';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import SEO from '../components/SEO';
import SVG from '../components/SVG';
import ProjectCard from '../components/ProjectCard';
import { rotate, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import triangle from '../images/triangle.svg';
import potluck from '../images/potluck1.png'
import avatar from '../images/avery.png';
import gits from  '../images/GITS.png';
import code from '../images/code.png';
import reactlogo from '../images/react.jpeg';
import jeopardy from '../images/jeopardy.png';
import node from '../images/node.png';
import postgres from '../images/postgres.png';
import mongo from '../images/mongo.png';
import firebase from '../images/firebase.jpeg';
import django from '../images/django.jpeg';
import gatsby from '../images/gatsbyjs.png';
import adobe from '../images/adobe.png'
import graphql from '../images/graphqql.png'
import coder from '../images/coder.svg'
import program from '../images/program.svg'
import '../styles/global';

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background-image: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24  justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3 lg:flex-row sm:mb-32 sm:mt-32')};
  text-align: center;
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left ')};
`;
const InnerTwo = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
  padding: 0px;
  margin: 0px;
`

const BigTitle = styled.p`
  ${tw('text-4xl sm:text-2xl md:text-3xl lg:text-5xl xxl:text-6xl font-serif text-white mb-6  ')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.35);
`;

const Title = styled.h1`
  ${tw('text-3xl sm:text-xl lg:text-3xl font-serif text-white mb-8 sm:mb-4 tracking-wide relative inline-block ')};
  text-shadow: 1px 2px 15px rgba(255, 255, 255, .4);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 0px;
  }
`;

const Subtitle = styled.p`
  ${tw('text-2xl sm:text-base md:text-2xl lg:text-3xl font-sans text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 1px 15px rgba(255, 255, 0, 0.3);
`;

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8 sm-')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

const Avatar = styled.img`
  ${tw('rounded-full w-32 xl:w-64 shadow-lg h-auto sm:mb-8')};
  
`;

const AboutSub = styled.span`
  ${tw('text-white sm:p-2 lg:ml-8 pt-12 lg:p-8 sm:text-xl text-2xl lg:text-4xl xl:text-4xl')};
  text-shadow: 1px 1px 5px black;
  background-image: linear-gradient(to right, #96232526, #96414345);
  border-radius: 5px 20px;
  border: 2px outset orange;
`;

const AboutDesc = styled.p`
  ${tw('text-white sm:text-lg lg:text-3xl xl:text-3xl sm:p-2  lg:p-8 sm:tracking-tight')};
  line-height: 1.3em;
  background-image: linear-gradient(to right, #96232526, #96414345);
  text-shadow: 1px 1px 5px black;
  border-radius: 20px 5px;
  border: 1px groove orange;
`;

const ContactText = styled.p`
  ${tw('text-grey-light font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  ${tw('text-center  absolute pin-b p-6 font-sans text-md md:text-xl lg:text-lg')};
  color: #F97628;
  text-shadow: 1px 1px 3px #AF7451;
  
  a {
    text-decoration: none;
  }
`;

const Skills = styled.div`
   ${tw('md:w-1/2flex flex-wrap justify-between mt-6 sm:')};
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 1rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`
const Language = styled.img`
  ${tw('w-full sm:w-2/3 lg:w-full')}
  width: 100%;
  justify-self: center;
  align-self: center;
`

const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={6}>
      <Divider speed={0.2} offset={0}>
        <UpDown>
          <SVG icon="triangle" className={hidden} width={48} stroke={colors["pink-dark"]} left="10%" top="20%" />
          <SVG icon="hexa" width={48} stroke={colors.orange} left="60%" top="70%" />
          <SVG icon="box" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors['blue-dark']} left="80%" top="10%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="50%" />
          <SVG icon="circle" width={16} fill={colors['green']} left="70%" top="90%" />
          <SVG icon="triangle" width={16} stroke={colors['grey-darkest']} left="30%" top="65%" />
          <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="75%" top="10%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" className={hidden} width={24} fill={colors['grey-darker']} left="5%" top="70%" />
        <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="50%" top="60%" />
        <SVG icon="upDown" width={8} fill={colors['grey-darkest']} left="95%" top="90%" />
        <SVG icon="upDown" className={hidden} width={24} fill={colors['grey-darker']} left="40%" top="80%" />
        <SVG icon="triangle" width={8} stroke={colors['grey-darker']} left="25%" top="5%" />
        <SVG icon="circle" width={64} fill={colors.green} left="95%" top="5%" />
        {/* <SVG icon="box" className={hidden} width={64} fill={colors.purple} left="5%" top="90%" /> */}
        <SVG icon="box" width={6} fill={colors['grey-darkest']} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors['grey-darkest']} left="40%" top="30%" />
        <SVG icon="hexa" width={16} stroke={colors['grey-darker']} left="10%" top="50%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darker']} left="80%" top="70%" />
      </Divider>
      <Content speed={.5} offset={0}>
        <Hero>
          <Avatar src={avatar}/>
          <BigTitle>
            Ciao! <br /> My name is Avery-Dante
          </BigTitle>
          <Subtitle>Full-Stack Developer | Multimedia Producer | Carpenter</Subtitle>
        </Hero>
      </Content>
      <DividerMiddle
        bg="linear-gradient(to right, #59C173, #a17fe0, #5D26C1)"
        // bg="linear-gradient(to right, #8E2DE2, #4A00E0)"
        speed={-0.2}
        offset={1.1}
        factor={2}
      />
    
      <Content speed={0.4} offset={1.15} factor={.8}>
        <Inner>
          <Title>About Me</Title>
          <AboutHero>
            <Avatar src={coder} alt="Avery-Dante" />
            <AboutSub>
              I miei amici!! Mi chiamo Avery-Dante!! I am a Full Stack Developer and Multimedia Producer, or a Jack of All Waves if you will. My journey has brought me back to my hometown Philadelphia where I continue to grow and saturate my mind with skills and experience. Forging the way with transparent communication, project management skills, and contagious motivation I strive to produce exceptional results. Equipped with an arsenal of skills I am dedicated to bringing ideas to life and leaving a lasting impression on the people I encounter.
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            If my past experience as a carpenter has taught me one thing, it is that building web applications is very similar to building a home. They both require patience, organization, creativity, versatility, perseverance, leadership, and great teamwork. However, learning to build web apps requires you to break your code, not your fingers. Using the array of skills I have gained over the years, I aim to continue making dreams and ideas a reality by building awesome web applications. 
          </AboutDesc>
          
        </Inner>
      </Content>
      <Content speed={.5} offset={2} factor={3}>
        <Inner>

          <Title>Skills</Title>
          <Skills>


            <Language src={code}>

            </Language>
            <Language src={reactlogo}>

            </Language>
            <Language src={node}>

            </Language>
            <Language src={firebase}>

            </Language>
            <Language src={django}>

            </Language>
            <Language src={mongo}>

            </Language>
            <Language src={postgres}>

            </Language>
            <Language src={adobe}>

            </Language>
            <Language src={gatsby}>

            </Language>
            <Language src={graphql}>

            </Language>
          </Skills>
        </Inner>
      </Content>

      <Divider speed={0.1} offset={1} factor={2}>
        <UpDown>
          <SVG icon="box" width={6} fill={colors["blue-black"]} left="85%" top="75%" />
          <SVG icon="upDown" width={8} fill={colors.teal} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors.orange} left="25%" top="5%" />
          <SVG icon="circle" className={hidden} width={24} fill={colors["blue-black"]} left="17%" top="60%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors.green} left="20%" top="90%" />
          <SVG icon="triangle" width={12} stroke={colors["blue-black"]} left="90%" top="30%" />
          <SVG icon="circle" width={16} fill={colors.yellow} left="70%" top="90%" />
          <SVG icon="triangle" className={hidden} width={16} stroke={colors.teal} left="18%" top="75%" />
          <SVG icon="circle" width={6} fill={colors["blue-black"]} left="75%" top="10%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors.green} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors["blue-black"]} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors.pink} left="80%" top="60%" />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors.yellow} left="29%" top="26%" />
        <SVG icon="hexa" width={16} stroke={colors.red} left="75%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors.yellow} left="80%" top="70%" />
      </Divider>
      <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={3} />
      <Divider speed={0.1} offset={3}>
        <UpDown>
          <SVG icon="box" className={hidden} width={6} fill={colors.blue} left="50%" top="75%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
          <SVG icon="upDown" className={hidden} width={24} fill={colors.orange} left="80%" top="80%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors.purple} left="5%" top="80%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
          <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
      </Divider>
      <Content speed={0.4} offset={4.5}>
        <Inner>
          <Title>Projects</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="GITS"
              link="http://gits-project.herokuapp.com/"
              bg={gits}//"linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
            >
              Take an interplanetary trip and learn more about our solar system!!!
            </ProjectCard>
            <ProjectCard
              title="Jeopardize Me"
              link="https://thelovesmith.github.io/Project-1---Don-t-Jeopardize-Me-/"
              bg={jeopardy}//"linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
            >
              Test you basic coding knowledge with this fun interactive Jeopardy game!!!
            </ProjectCard>
            <ProjectCard
              title="Poppin' Potluck"
              link="#"
              bg={potluck}//"linear-gradient(to right, #009245 0%, #FCEE21 100%)"
            >
              Organize your next potluck with this user friendly interface!!!
            </ProjectCard>
            {/* <ProjectCard
              title="Capstone Project"
              link="#"
              bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
            >
              Lorem ipsum 
            </ProjectCard> */}
          </ProjectsWrapper>
        </Inner>

      </Content>
      <Divider fill="#59C173" speed={0.2} offset={5}>
        <WaveWrapper>
          <InnerWave>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 338.05" preserveAspectRatio="none">
              <path className={waveAnimation} >
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </InnerWave>
        </WaveWrapper>
      </Divider>
      <Content speed={0.4} offset={5}>
        <InnerTwo>
          <Title>Please Get In Touch:</Title>
          <ContactText>
            Email me <a href="mailto:averydante9@gmail.com">HERE</a> or find me on other platforms:{' '}
            <a href="https://github.com/thelovesmith">Github</a> {' '}
            <a href="#">Instagram</a>
          </ContactText>
        </InnerTwo>
          <Avatar src={program}/>
        <Footer>
          2018 &copy;  by Avery-Dante Hinds.{' '}
          {/* <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Github Repository</a>. */}
        </Footer>
      </Content>
      <Divider speed={0.1} offset={4}>
        <UpDown>
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
          <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors["green-light"]} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
        <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
      </Divider>
      <Divider speed={0.1} offset={5}>
        <UpDown>
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="triangle" width={12} stroke={colors.orange} left="95%" top="50%" />
          <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['green']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
        <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
      </Divider>
    </Parallax>
  </React.Fragment>
);

export default Index;
