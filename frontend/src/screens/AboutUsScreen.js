import styled from 'styled-components'
import { Figure } from 'react-bootstrap'
import RedPic from '../pictures/MYPIC.jpeg'
import KevinPic from '../pictures/KEVINPIC.jpeg'
import githublogo from '../pictures/githublogo.webp'
import linkedinlogo from '../pictures/linkedinlogo.png'

const StyledAboutUs = styled.div``

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <h1>Who we are</h1>
      <p>
        Hello! Welcome to the About Us page! We are Kevin Gleeson and Radouane
        Bahi (please call me Red, instead). We're both graduates from the
        Flatiron School and decided to team up to make this COVID-19 tracker.
      </p>
      <Figure>
        <Figure.Image width={171} height={180} alt='redpic' src={RedPic} />
        <br />
        <a href='https://github.com/radbahi' target='_blank' rel='noreferrer'>
          <Figure.Image width={32} height={32} alt='github' src={githublogo} />
        </a>
        <a
          href='https://www.linkedin.com/in/radouane-bahi-5410a1137/'
          target='_blank'
          rel='noreferrer'
        >
          <Figure.Image
            width={32}
            height={32}
            alt='linkedin'
            src={linkedinlogo}
          />
        </a>
        <Figure.Caption>
          Radouane 'Red' Bahi. This was originally my final project for Flatiron
          but I was still unhappy with how it turned out. I started all over and
          the final product is much better in my opinion. Contact{' '}
          {
            <a
              href='mailto:alfonsolibron@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Alfonso Libron
            </a>
          }{' '}
          for his design for this project.
        </Figure.Caption>
      </Figure>
      <br />
      <Figure>
        <Figure.Image width={171} height={180} alt='kevinpic' src={KevinPic} />
        <br />
        <a
          href='https://github.com/teapuddles'
          target='_blank'
          rel='noreferrer'
        >
          <Figure.Image width={32} height={32} alt='github' src={githublogo} />
        </a>
        <a
          href='https://www.linkedin.com/in/teapuddles824/'
          target='_blank'
          rel='noreferrer'
        >
          <Figure.Image
            width={32}
            height={32}
            alt='linkedin'
            src={linkedinlogo}
          />
        </a>
        <Figure.Caption>and this is kevin</Figure.Caption>
      </Figure>
    </StyledAboutUs>
  )
}

export default AboutUs
