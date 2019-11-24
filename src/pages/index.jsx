/*global tw */
import React from "react";
import "typeface-cantata-one";
import "typeface-open-sans";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import SEO from "../components/SEO";
import SVG from "../components/SVG";
import ProjectCard from "../components/ProjectCard";
import { UpDown, UpDownWide, waveAnimation } from "../styles/animations";
import { hidden } from "../styles/utils";
import { colors } from "../../tailwind";
import { useStaticQuery, graphql } from "gatsby";
import potluck from "../images/potluck1.png";
import gits from "../images/GITS.png";
import jaws from "../images/jaws.png";
import code from "../images/code.png";
import reactlogo from "../images/react.jpeg";
import jeopardy from "../images/jeopardy.png";
import node from "../images/node.png";
import postgres from "../images/postgres.png";
import mongo from "../images/mongo.png";
import firebase from "../images/firebase.jpeg";
import django from "../images/django.jpeg";
import gatsby from "../images/gatsbyjs.png";
import adobe from "../images/adobe.png";
import graphqql from "../images/graphqql.png";
import flutter from "../images/flutter.jpeg";
import redux from "../images/redux.jpg";
import islandStream1 from "../images/islandStream1.png";
import solarX from "../images/solarX.png";
import program from "../images/program.svg";
import "../styles/global";

import {
  Divider,
  DividerMiddle,
  Content,
  ContentTwo,
  Hero,
  Inner,
  InnerTwo,
  BigTitle,
  Title,
  Subtitle,
  ProjectsWrapper,
  WaveWrapper,
  InnerWave,
  AboutHero,
  Avatar,
  Avatar2,
  AboutSub,
  AboutDesc,
  ContactText,
  Footer,
  Skills,
  Language
} from "../components/index.css";

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      selfPortrait: file(relativePath: { eq: "avery.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <React.Fragment>
      <SEO />
      <Parallax pages={7}>
        <Divider speed={0.2} offset={0}>
          <UpDown>
            <SVG
              icon="triangle"
              className={hidden}
              width={48}
              stroke={colors["grey-lightx"]}
              left="10%"
              top="20%"
            />
            <SVG
              icon="hexa"
              width={48}
              stroke={colors.white}
              left="60%"
              top="70%"
            />
            <SVG
              icon="box"
              width={6}
              fill={colors["grey-darker"]}
              left="60%"
              top="15%"
            />
          </UpDown>
          <UpDownWide>
            <SVG
              icon="arrowUp"
              className={hidden}
              width={16}
              fill={colors["grey-lighter"]}
              left="80%"
              top="10%"
            />
            <SVG
              icon="triangle"
              width={12}
              stroke={colors.white}
              left="90%"
              top="50%"
            />
            <SVG
              icon="circle"
              width={16}
              fill={colors["grey-dark"]}
              left="70%"
              top="90%"
            />
            <SVG
              icon="triangle"
              width={16}
              stroke={colors["grey-darkest"]}
              left="30%"
              top="65%"
            />
            <SVG
              icon="circle"
              width={6}
              fill={colors["grey-darkest"]}
              left="75%"
              top="10%"
            />
            <SVG
              icon="upDown"
              className={hidden}
              width={8}
              fill={colors["grey-darkest"]}
              left="45%"
              top="10%"
            />
          </UpDownWide>
          <SVG
            icon="circle"
            className={hidden}
            width={24}
            fill={colors["grey-darker"]}
            left="5%"
            top="70%"
          />
          <SVG
            icon="circle"
            width={6}
            fill={colors["grey-darkest"]}
            left="4%"
            top="20%"
          />
          <SVG
            icon="circle"
            width={12}
            fill={colors["grey-darkest"]}
            left="50%"
            top="60%"
          />
          <SVG
            icon="upDown"
            width={8}
            fill={colors.grey}
            left="80%"
            top="90%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={24}
            fill={colors["grey-darker"]}
            left="40%"
            top="80%"
          />
          <SVG
            icon="triangle"
            width={8}
            stroke={colors["grey-darker"]}
            left="25%"
            top="5%"
          />
          <SVG
            icon="circle"
            width={64}
            fill={colors.white}
            left="95%"
            top="5%"
          />
          {/* <SVG icon="box" className={hidden} width={64} fill={colors.purple} left="5%" top="90%" /> */}
          <SVG
            icon="box"
            width={6}
            fill={colors["grey-darkest"]}
            left="10%"
            top="10%"
          />
          <SVG
            icon="box"
            width={12}
            fill={colors["grey-lighter"]}
            left="40%"
            top="30%"
          />
          <SVG
            icon="hexa"
            width={16}
            stroke={colors["grey-darker"]}
            left="10%"
            top="50%"
          />
          <SVG
            icon="hexa"
            width={8}
            stroke={colors["grey-darker"]}
            left="80%"
            top="70%"
          />
        </Divider>
        //! Titles //
        <Content speed={0.5} offset={0}>
          <Hero>
            <Avatar fluid={data.selfPortrait.childImageSharp.fluid} />
            {/* <Img fluid={data.selfPortrait.childImageSharp.fluid}/> */}
            <BigTitle>Avery-Dante</BigTitle>
            <Subtitle>Developer | Producer | Designer</Subtitle>
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
        <Content speed={0.5} offset={2.5} factor={1.5}>
          <Inner>
            <Title>Tech</Title>
            <AboutDesc>
              Over the years I have acquired an array of skills, and my toolbag
              is ever-growing. Im not going to map through the whole thing but
              below are a few technologies I have been using recently.
            </AboutDesc>
            <Skills>
              <Language src={code}></Language>
              <Language src={reactlogo}></Language>
              <Language src={node}></Language>
              <Language src={firebase}></Language>
              <Language src={django}></Language>
              <Language src={mongo}></Language>
              <Language src={postgres}></Language>
              <Language src={adobe}></Language>
              <Language src={gatsby}></Language>
              <Language src={graphqql}></Language>
              <Language src={redux}></Language>
              <Language src={flutter}></Language>
            </Skills>
          </Inner>
        </Content>
        <Divider speed={0.1} offset={1} factor={2}>
          <UpDown>
            <SVG
              icon="box"
              width={6}
              fill={colors["blue-black"]}
              left="85%"
              top="75%"
            />
            <SVG
              icon="upDown"
              width={8}
              fill={colors.teal}
              left="70%"
              top="20%"
            />
            <SVG
              icon="triangle"
              width={8}
              stroke={colors.orange}
              left="25%"
              top="5%"
            />
            <SVG
              icon="circle"
              className={hidden}
              width={24}
              fill={colors["blue-black"]}
              left="17%"
              top="60%"
            />
          </UpDown>
          <UpDownWide>
            <SVG
              icon="arrowUp"
              className={hidden}
              width={16}
              fill={colors.green}
              left="20%"
              top="90%"
            />
            <SVG
              icon="triangle"
              width={12}
              stroke={colors["blue-black"]}
              left="90%"
              top="30%"
            />
            <SVG
              icon="circle"
              width={16}
              fill={colors.yellow}
              left="70%"
              top="90%"
            />
            <SVG
              icon="triangle"
              className={hidden}
              width={16}
              stroke={colors.teal}
              left="18%"
              top="75%"
            />
            <SVG
              icon="circle"
              width={6}
              fill={colors["blue-black"]}
              left="75%"
              top="10%"
            />
            <SVG
              icon="upDown"
              className={hidden}
              width={8}
              fill={colors.green}
              left="45%"
              top="10%"
            />
          </UpDownWide>
          <SVG
            icon="circle"
            width={6}
            fill={colors["blue-black"]}
            left="4%"
            top="20%"
          />
          <SVG
            icon="circle"
            width={12}
            fill={colors.pink}
            left="80%"
            top="60%"
          />
          <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
          <SVG
            icon="box"
            width={12}
            fill={colors.yellow}
            left="29%"
            top="26%"
          />
          <SVG
            icon="hexa"
            width={16}
            stroke={colors.red}
            left="75%"
            top="30%"
          />
          <SVG
            icon="hexa"
            width={8}
            stroke={colors.yellow}
            left="80%"
            top="70%"
          />
        </Divider>
        <Divider
          bg="#23262b"
          clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
          speed={0.2}
          offset={3}
        />
        <Divider speed={0.1} offset={3}>
          <UpDown>
            <SVG
              icon="box"
              className={hidden}
              width={6}
              fill={colors.blue}
              left="50%"
              top="75%"
            />
            <SVG
              icon="upDown"
              className={hidden}
              width={8}
              fill={colors["grey-darkest"]}
              left="70%"
              top="20%"
            />
            <SVG
              icon="triangle"
              width={8}
              stroke={colors["grey-darkest"]}
              left="25%"
              top="5%"
            />
            <SVG
              icon="upDown"
              className={hidden}
              width={24}
              fill={colors.orange}
              left="80%"
              top="80%"
            />
          </UpDown>
          <UpDownWide>
            <SVG
              icon="arrowUp"
              className={hidden}
              width={16}
              fill={colors.purple}
              left="5%"
              top="80%"
            />
            <SVG
              icon="triangle"
              width={12}
              stroke={colors.white}
              left="95%"
              top="50%"
            />
            <SVG
              icon="circle"
              width={6}
              fill={colors.white}
              left="85%"
              top="15%"
            />
            <SVG
              icon="upDown"
              className={hidden}
              width={8}
              fill={colors["grey-darkest"]}
              left="45%"
              top="10%"
            />
          </UpDownWide>
          <SVG
            icon="circle"
            width={6}
            fill={colors.white}
            left="4%"
            top="20%"
          />
          <SVG
            icon="circle"
            width={12}
            fill={colors["grey-darkest"]}
            left="70%"
            top="60%"
          />
          <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
          <SVG
            icon="box"
            width={12}
            fill={colors["grey-darkest"]}
            left="20%"
            top="30%"
          />
          <SVG
            icon="hexa"
            width={8}
            stroke={colors["grey-darkest"]}
            left="80%"
            top="70%"
          />
        </Divider>
        <Content speed={0.5} offset={3.0} factor={6}>
          <Inner>
            <Title>Projects</Title>
            <ProjectsWrapper>
              <ProjectCard
                title="GITS"
                link="http://gits-project.herokuapp.com/"
                bg={gits} //"linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
              >
                Take an interplanetary trip and learn more about our solar
                system!!!
              </ProjectCard>
              <ProjectCard
                title="Jeopardize Me"
                link="https://thelovesmith.github.io/Project-1---Don-t-Jeopardize-Me-/"
                bg={jeopardy} //"linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
              >
                Test you basic coding knowledge with this fun interactive
                Jeopardy game!!!
                <br />
                The first website I ever made. lol
              </ProjectCard>
              <ProjectCard
                title="Poppin' Potluck"
                link="https://poppin-potluck.netlify.com//"
                bg={potluck} //"linear-gradient(to right, #009245 0%, #FCEE21 100%)"
              >
                Organize your next potluck with this user friendly interface!!!
              </ProjectCard>
              <ProjectCard
                title="Capstone Project"
                link="https://jackofallwaves.netlify.com/"
                bg={jaws} //"linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
              >
                Jack Of All Waves music collective website; become a friend of
                JAWS!!!
                <br />
                **Under Construction**
              </ProjectCard>
              <ProjectCard
                title="Solar Xchange"
                link="https://mysolarxchange.com/"
                bg={solarX} //"linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
              >
                Grow your Solar Energy Business!! Get Solar home leads!!
              </ProjectCard>
              <ProjectCard
                title="Island Stream"
                link="https://www.islandstreamapp.com/"
                bg={islandStream1}
              ></ProjectCard>
            </ProjectsWrapper>
          </Inner>
        </Content>
        <Divider fill="#59C173" speed={0.2} offset={6}>
          <WaveWrapper>
            <InnerWave>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 338.05"
                preserveAspectRatio="none"
              >
                <path className={waveAnimation}>
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
                I am a Full-Stack Developer born and raised in Philadelphia who
                is dedicated to bringing ideas to life and building lasting
                professional relationships. I enjoy the thrill of exploring new
                technologies and engineering innovative products with an arsenal
                of skills. If you are a Business owner who needs better online
                presence, an Entrepreneur with an idea, or a fellow Developer or
                Designer who wants to build something great; I have the skills
                to assist you in accomplishing your goals.
                {/* If you are a fellow Developer, Designer, Producer, Artist, or
                Entrepreneur please don't be afraid to reach out and connect
                with me on GitHub, LinkedIn, Instagram, or any other social
                sites!! I am very open to working with others and sharing ideas. */}
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
              Email me <a href="mailto:averydante9@gmail.com">HERE</a> or find
              me on other platforms:{" "}
              <a href="https://github.com/thelovesmith" target="_blank">
                Github
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/avery-dante-hinds/"
                target="_blank"
              >
                LinkedIn
              </a>
            </ContactText>
          </InnerTwo>
          <Avatar2 src={program} />
          <Footer>2018 &copy; by Avery-Dante Hinds. </Footer>
        </ContentTwo>
        <Divider speed={0.1} offset={4}>
          <UpDown>
            <SVG
              icon="upDown"
              className={hidden}
              width={8}
              fill={colors["grey-darkest"]}
              left="70%"
              top="20%"
            />
            <SVG
              icon="triangle"
              width={8}
              stroke={colors["grey-darkest"]}
              left="25%"
              top="5%"
            />
          </UpDown>
          <UpDownWide>
            <SVG
              icon="triangle"
              width={12}
              stroke={colors.white}
              left="95%"
              top="50%"
            />
            <SVG
              icon="circle"
              width={6}
              fill={colors.white}
              left="85%"
              top="15%"
            />
            <SVG
              icon="upDown"
              className={hidden}
              width={8}
              fill={colors["grey-darkest"]}
              left="45%"
              top="10%"
            />
          </UpDownWide>
          <SVG
            icon="circle"
            width={6}
            fill={colors["green-light"]}
            left="4%"
            top="20%"
          />
          <SVG
            icon="circle"
            width={12}
            fill={colors["grey-darkest"]}
            left="70%"
            top="60%"
          />
          <SVG
            icon="box"
            width={12}
            fill={colors["grey-darkest"]}
            left="20%"
            top="30%"
          />
          <SVG
            icon="hexa"
            width={8}
            stroke={colors["grey-darkest"]}
            left="80%"
            top="70%"
          />
        </Divider>
        <Divider speed={0.1} offset={5}>
          <UpDown>
            <SVG
              icon="upDown"
              className={hidden}
              width={8}
              fill={colors["grey-darkest"]}
              left="70%"
              top="20%"
            />
            <SVG
              icon="triangle"
              width={8}
              stroke={colors["grey-darkest"]}
              left="25%"
              top="5%"
            />
          </UpDown>
          <UpDownWide>
            <SVG
              icon="triangle"
              width={12}
              stroke={colors.orange}
              left="95%"
              top="50%"
            />
            <SVG
              icon="circle"
              width={6}
              fill={colors.white}
              left="85%"
              top="15%"
            />
            <SVG
              icon="upDown"
              className={hidden}
              width={8}
              fill={colors["green"]}
              left="45%"
              top="10%"
            />
          </UpDownWide>
          <SVG
            icon="circle"
            width={6}
            fill={colors.white}
            left="4%"
            top="20%"
          />
          <SVG
            icon="circle"
            width={12}
            fill={colors["grey-darkest"]}
            left="70%"
            top="60%"
          />
          <SVG
            icon="box"
            width={12}
            fill={colors["grey-darkest"]}
            left="20%"
            top="30%"
          />
          <SVG
            icon="hexa"
            width={8}
            stroke={colors["grey-darkest"]}
            left="80%"
            top="70%"
          />
        </Divider>
        <Divider speed={0.1} offset={6}>
          <UpDownWide>
            <SVG
              icon="triangle"
              width={12}
              stroke={colors.orange}
              left="95%"
              top="50%"
            />
            <SVG
              icon="circle"
              width={6}
              fill={colors.white}
              left="85%"
              top="15%"
            />
            <SVG
              icon="upDown"
              className={hidden}
              width={8}
              fill={colors["green"]}
              left="45%"
              top="10%"
            />
          </UpDownWide>
          <UpDown>
            <SVG
              icon="upDown"
              className={hidden}
              width={8}
              fill={colors["grey-darkest"]}
              left="70%"
              top="20%"
            />
            <SVG
              icon="triangle"
              width={8}
              stroke={colors["grey-darkest"]}
              left="25%"
              top="5%"
            />
          </UpDown>
          <SVG
            icon="circle"
            width={6}
            fill={colors.white}
            left="4%"
            top="20%"
          />
          <SVG
            icon="circle"
            width={12}
            fill={colors["grey-darkest"]}
            left="70%"
            top="60%"
          />
          <SVG
            icon="box"
            width={12}
            fill={colors["grey-darkest"]}
            left="20%"
            top="30%"
          />
          <SVG
            icon="hexa"
            width={8}
            stroke={colors["grey-darkest"]}
            left="80%"
            top="70%"
          />
        </Divider>
      </Parallax>
    </React.Fragment>
  );
};

export default Index;
