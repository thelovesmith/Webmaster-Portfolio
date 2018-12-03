/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';


const Wrapper = styled.a`
 
  ${tw('shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white ')};
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: auto;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`;

const Text = styled.div`
  ${tw('text-orange opacity-75 font-sans  md:text-base sm:text-sm lg:text-2xl')};
  text-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);
  
  padding: 10px;

`;

const Title = styled.div`
  ${tw('text-orange uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8')};
  text-shadow: 1px 2px 15px rgba(255, 255, 255, 0.5);
`;
const Back = styled.div`
;
display: flex-column;
justify-content: center;
align-content: center;
border-radius: 10px;
text-align: center;

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
