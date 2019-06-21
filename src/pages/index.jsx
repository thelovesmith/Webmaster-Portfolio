/* global tw */
import React from 'react';
import styled from 'react-emotion';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import SEO from '../components/SEO';
import SVG from '../components/SVG';
import ProjectCard from '../components/ProjectCard';
import { rotate, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import triangle from '../images/triangle.svg';
import potluck from '../images/potluck1.png';
import avatar from '../images/avery.png';
import gits from  '../images/GITS.png';
import jaws from '../images/jaws.png';
import code from '../images/code.png';
import reactlogo from '../images/react.jpeg';
import jeopardy from '../images/jeopardy.png';
import node from '../images/node.png';
import postgres from '../images/postgres.png';
import mongo from '../images/mongo.png';
import firebase from '../images/firebase.jpeg';
import django from '../images/django.jpeg';
import gatsby from '../images/gatsbyjs.png';
import adobe from '../images/adobe.png';
import graphql from '../images/graphqql.png';
import flutter from '../images/flutter.jpeg';
import redux from '../images/redux.jpg';
import islandStream1   from '../images/islandStream1.png';
import islandStream2  from "../images/islandStream2.png";
import coder from '../images/coder.svg';
import program from '../images/program.svg';
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
const ContentTwo = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center  lg:flex md:flex  sm:flex sm:flex-col-reverse z-50 ')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3 lg:flex-row sm:mb-32 sm:mt-32')};
  text-align: center;
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left lg:full')};
`;
const InnerTwo = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left  ')};
 
`

const BigTitle = styled.p`
  ${tw('text-5xl sm:text-4xl lg:text-5xl font-serif text-white m-0')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.35);
  
`;

const Title = styled.h1`
  ${tw('text-3xl sm:text-xl lg:text-3xl font-serif text-white mb-8 sm:mb-4 lg:mb-10 tracking-wide relative inline-block ')};
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
  ${tw('text-2xl sm:text-base md:text-2xl lg:text-3xl font-sans text-white mt-8 p-0')};
  text-shadow: 1px 1px 15px rgba(255, 255, 0, 0.3);
`;

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8  lg:w-full')};
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
  ${tw('flex flex-col lg:flex-row items-center m-8')};
`;

const Avatar = styled.img`
  ${tw('rounded-full w-48 xl:w-1/2 shadow-lg h-auto sm:mb-8')};
  
`;

const AboutSub = styled.span`
  ${tw('text-white sm:p-2 lg: pt-12 lg:p-8 sm:text-xl text-2xl lg:text-4xl xl:text-4xl')};
  text-shadow: 1px 1px 5px black;
  background-image: linear-gradient(to right, #96232526, #96414345);
  border-radius: 5px 20px;
  border: 2px outset orange;
`;

const AboutDesc = styled.p`
  ${tw('text-white sm:text-lg lg:text-3xl xl:text-3xl sm:p-2  lg:p-8 sm:tracking-tight')};
  line-height: 1.3em;
  background: #000000;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
  ${tw('text-center  absolute pin-b p-6 font-sans text-md md:text-lg lg:text-2xl')};
  color: #F97628;
  text-shadow: 1px 1px 3px #AF7451;
  
  a {
    text-decoration: none;
  }
`;

const Skills = styled.div`
   ${tw('md:w-1/2flex flex-wrap justify-between mt-6 lg:w-full')};
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
  ${tw('w-4/5 sm:w-2/3 lg:w-4/5')}
  width: 75%;
  justify-self: center;
  align-self: center;
`

const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={7}>
      <Divider speed={0.2} offset={0}>
        <UpDown>
          <SVG icon="triangle" className={hidden} width={48} stroke={colors["grey-lightx"]} left="10%" top="20%" />
          <SVG icon="hexa" width={48} stroke={colors.white} left="60%" top="70%" />
          <SVG icon="box" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors['grey-lighter']} left="80%" top="10%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="50%" />
          <SVG icon="circle" width={16} fill={colors['grey-dark']} left="70%" top="90%" />
          <SVG icon="triangle" width={16} stroke={colors['grey-darkest']} left="30%" top="65%" />
          <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="75%" top="10%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" className={hidden} width={24} fill={colors['grey-darker']} left="5%" top="70%" />
        <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="50%" top="60%" />
        <SVG icon="upDown" width={8} fill={colors.grey} left="80%" top="90%" />
        <SVG icon="upDown" className={hidden} width={24} fill={colors['grey-darker']} left="40%" top="80%" />
        <SVG icon="triangle" width={8} stroke={colors['grey-darker']} left="25%" top="5%" />
        <SVG icon="circle" width={64} fill={colors.white} left="95%" top="5%" />
        {/* <SVG icon="box" className={hidden} width={64} fill={colors.purple} left="5%" top="90%" /> */}
        <SVG icon="box" width={6} fill={colors['grey-darkest']} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors['grey-lighter']} left="40%" top="30%" />
        <SVG icon="hexa" width={16} stroke={colors['grey-darker']} left="10%" top="50%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darker']} left="80%" top="70%" />
      </Divider>
      //! Titles //
      <Content speed={.5} offset={0}>
        <Hero>
          <Avatar src={avatar}/>
          <BigTitle>
            Avery-Dante 
          </BigTitle>
          <Subtitle>Developer |  Producer |  Designer</Subtitle>
        </Hero>
      </Content>
      <DividerMiddle
        // bg="linear-gradient(to right, #59C173, #a17fe0, #5D26C1)"
        // bg="linear-gradient(to right, #8E2DE2, #4A00E0)"
        bg="linear-gradient(to right, #000000, #434343)"
        speed={-0.2}
        offset={1.1}
        factor={2}
      />
    
      
      <Content  speed={0.5} offset={2.5} factor={1.5}>
     
        <Inner>

          <Title>Tech</Title>
          <AboutDesc>
          Over the years I have acquired an array of skills, and the list of tech I use is ever growing. Im not going to map through the whole thing but below are a few technologies I have been using more recently. 
          </AboutDesc>
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
            <Language src={redux}>

            </Language>
            <Language src={flutter}>

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
      <Content speed={.5} offset={3.0} factor={6}>
      
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
              <br/>
              The first website I ever made. lol
              
            </ProjectCard>
            <ProjectCard
              title="Poppin' Potluck"
              link="https://poppin-potluck.netlify.com//"
              bg={potluck}//"linear-gradient(to right, #009245 0%, #FCEE21 100%)"
            >
              Organize your next potluck with this user friendly interface!!!
            </ProjectCard>
            <ProjectCard
              title="Capstone Project"
              link="https://jackofallwaves.netlify.com/"
              bg={jaws}//"linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
            >
              Jack Of All Waves music collective website; become a friend of JAWS!!!
              <br/>
              **Under Construction**
            </ProjectCard>
            <ProjectCard 
              title="Island Stream"
              link="https://www.islandstreamapp.com/"
              bg={islandStream1}

            >
              
            </ProjectCard>
          </ProjectsWrapper>
        </Inner>

      </Content>
      <Divider fill="#59C173" speed={0.2} offset={6}>
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
      <Content speed={0.5} offset={1} factor={1}>
        <Inner>
          <Title>About Me</Title>
          <AboutHero>
            {/* <Avatar src={coder} alt="Avery-Dante" /> */}
          {/*   */}
            <AboutDesc>
              I am a  Full-Stack Developer, Producer, and a Designer born and raised in Philadelphia who is dedicated to bringing ideas to life and is actively looking for work. I enjoy the thrill of exploring new technologies and engineering innovative products. If you are a fellow Developer, Designer, Producer, Artist, or Entrepreneur please don't be afraid to reach out and connect with me on GitHub, LinkedIn, Instagram, or any other social sites!! I am very open to working with others and sharing ideas.

              {/* , or a Jack of All Waves if you will. My journey has brought me back to my hometown Philadelphia where I continue to grow and saturate my mind with skills and experience. Forging the way with transparent communication, project management skills, and contagious motivation I strive to produce exceptional results. Equipped with an arsenal of skills I am dedicated to bringing ideas to life and leaving a lasting impression on the people I encounter. */}
            </AboutDesc>
          </AboutHero>
          {/* <AboutDesc>
            If my past experience as a carpenter has taught me one thing, it is that building web applications is very similar to building a home. They both require patience, organization, creativity, versatility, perseverance, leadership, and great teamwork. However, learning to build web apps requires you to break your code, not your fingers. Using the array of skills I have gained over the years, I aim to continue making dreams and ideas a reality by building awesome web applications. 
          </AboutDesc> */}
          
        </Inner>
      </Content>
      <ContentTwo speed={0.4} offset={6}>
        <InnerTwo>
          <Title>Please Get In Touch:</Title>
          <ContactText>
            Email me <a href="mailto:averydante9@gmail.com">HERE</a> or find me on other platforms:{' '}
            <a href="https://github.com/thelovesmith" target='_blank'>Github</a> {' '}
            <a href="https://www.linkedin.com/in/avery-dante-hinds/" target='_blank'>LinkedIn</a>
          </ContactText>
        </InnerTwo>
          <Avatar src={program}/>
        <Footer>
          2018 &copy;  by Avery-Dante Hinds.{' '}
        </Footer>
      </ContentTwo>
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
      <Divider speed={0.1} offset={6}>
        
        <UpDownWide>
          <SVG icon="triangle" width={12} stroke={colors.orange} left="95%" top="50%" />
          <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['green']} left="45%" top="10%" />
        </UpDownWide>
        <UpDown>
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
        </UpDown>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
        <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
      </Divider>
    </Parallax>
  </React.Fragment>
);

export default Index;
