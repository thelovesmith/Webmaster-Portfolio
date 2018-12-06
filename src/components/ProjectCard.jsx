/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';


const Wrapper = styled.a`
 
  ${tw('shadow-lg relative no-underline rounded-lg px-6 py-6 md:py-24 text-white ')};
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`;

const Text = styled.div`
  ${tw('text-orange-light opacity-75 font-sans font-bold md:text-base sm:text-sm lg:text-2xl')};
  text-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);
  
  padding: 10px;

`;

const Title = styled.div`
  ${tw('text-orange-light uppercase text-2xl font-bold font-mono md:text-3xl xl:text-4xl tracking-wide font-sans pt-4')};
  text-shadow: 1px 2px 15px rgba(255, 255, 255, 0.5);
`;
const Back = styled.div`
;
display: flex-column;
justify-content: center;
align-content: center;
border-radius: 5px;
text-align: center;
background: #1D976C;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #601D976C, #6093F9B9, #601D976C);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #601D976C, #6093F9B9, #601D976C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */




`

const ProjectCard = ({ title, link, children, bg }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg={bg}>
    <Back>
    <Title>{title}</Title>
    <Text>{children}</Text>

    </Back>
  </Wrapper>
);

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  // children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  // bg: PropTypes.string.isRequired,
};
