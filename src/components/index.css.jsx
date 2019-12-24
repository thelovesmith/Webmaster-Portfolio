import styled from "react-emotion";
import "../styles/global";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import {
  rotate,
  UpDown,
  UpDownWide,
  waveAnimation
} from "../styles/animations";
import Img from "gatsby-image";
import triangle from "../images/triangle.svg";

export const Divider = styled(ParallaxLayer)`
  ${tw("absolute w-full h-full")};
  background-image: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

export const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

export const Content = styled(ParallaxLayer)`
  ${tw("p-6 md:p-12 lg:p-24  justify-center items-center flex z-50")};
`;
export const ContentTwo = styled(ParallaxLayer)`
  ${tw(
    "p-6 md:p-12 lg:p-24 justify-center items-center  lg:flex md:flex  sm:flex sm:flex-col-reverse z-50 "
  )};
`;

export const Hero = styled.div`
  ${tw("w-full flex flex-col xl:w-2/3 lg:flex-col sm:mb-32 sm:mt-32")};
  text-align: center;
  justify-content: center;
`;

export const Inner = styled.div`
  ${tw("w-full xxl:w-2/3 text-center lg:text-left lg:full")};
`;
export const InnerTwo = styled.div`
  ${tw("w-full xxl:w-2/3 text-center lg:text-left  ")};
`;

export const BigTitle = styled.p`
  ${tw("text-5xl sm:text-4xl lg:text-5xl font-serif text-white m-0")};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.35);
`;

export const Title = styled.h1`
  ${tw(
    "text-3xl sm:text-xl lg:text-3xl font-serif text-white mb-8 mt-8 sm:m-4 lg:m-10 tracking-wide relative inline-block "
  )};
  text-shadow: 1px 2px 15px rgba(255, 255, 255, 0.4);
  &:before {
    content: "";
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

export const Subtitle = styled.p`
  ${tw(
    "text-2xl sm:text-base md:text-2xl lg:text-3xl font-sans text-white mt-8 p-0"
  )};
  text-shadow: 1px 1px 15px rgba(255, 255, 0, 0.3);
`;

export const ProjectsWrapper = styled.div`
  ${tw("flex flex-wrap justify-between mt-8  lg:w-full")};
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

export const WaveWrapper = styled.div`
  ${tw("absolute pin-b w-full")};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

export const InnerWave = styled.div`
  ${tw("relative h-full")};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

export const AboutHero = styled.div`
  ${tw("flex flex-col lg:flex-row items-center m-8")};
`;

export const Avatar = styled(Img)`
  ${tw("rounded-full w-48 xl:w-1/2 shadow-lg h-auto sm:mb-8")};
  margin: auto;
`;
export const Avatar2 = styled.img`
  ${tw("rounded-full w-48 xl:w-1/2 shadow-lg h-auto sm:mb-8")};
`;

export const AboutSub = styled.span`
  ${tw(
    "text-white sm:p-2 lg: pt-12 lg:p-8 sm:text-xl text-2xl lg:text-4xl xl:text-4xl"
  )};
  text-shadow: 1px 1px 5px black;
  background-image: linear-gradient(to right, #96232526, #96414345);
  border-radius: 5px 20px;
  border: 2px outset orange;
`;

export const AboutDesc = styled.p`
  ${tw(
    "text-white sm:text-lg lg:text-3xl xl:text-3xl sm:p-2  lg:p-8 sm:tracking-tight"
  )};
  line-height: 1.3em;
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #434343,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  text-shadow: 1px 1px 5px black;
  border-radius: 20px 5px;
  border: 1px groove orange;
`;

export const ContactText = styled.p`
  ${tw("text-grey-light font-sans text-xl pb-10 md:text-2xl lg:text-3xl")};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;
export const ContactFormWrapper = styled.div`
  ${tw("text-grey-light font-sans text-xl md:text-2xl lg:text-3xl")};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

export const Footer = styled.footer`
  ${tw(
    "text-center  absolute pin-b p-6 mt-6 font-sans text-md md:text-lg lg:text-xl"
  )};
  color: #f97628;
  text-shadow: 1px 1px 3px #af7451;

  a {
    text-decoration: none;
  }
`;

export const Skills = styled.div`
  ${tw("md:w-1/2flex flex-wrap justify-between mt-6 lg:w-full")};
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
`;
export const Language = styled.img`
  ${tw("w-4/5 sm:w-2/3 lg:w-4/5")}
  width: 75%;
  justify-self: center;
  align-self: center;
`;
