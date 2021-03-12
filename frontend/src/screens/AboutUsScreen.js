import styled from 'styled-components'
import { Figure } from 'react-bootstrap'
import RedPic from '../pictures/MYPIC.jpeg'
import KevinPic from '../pictures/KEVINPIC.jpeg'

const StyledAboutUs = styled.div``

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <h1>Who we are</h1>
      <p>
        Hello! Welcome to the About Us page! We are Kevin Gleeson and Radouane
        Bahi (please call me Red, instead).
      </p>
      <Figure>
        <Figure.Image width={171} height={180} alt='171x180' src={RedPic} />
        <Figure.Caption>
          FROM THE SLUMS OF SHAOLIN{<br />} WU TANG CLAN STRIKES AGAIN{<br />}{' '}
          THE RZA, THE GZA, OL DIRTY BASTARD, INSPECTAH DECK{<br />} RAEKWON THE
          CHEF, U GOD, GHOSTFACE KILLAH AND THE METHOD MAN
        </Figure.Caption>
      </Figure>
      <br />
      <Figure>
        <Figure.Image width={171} height={180} alt='171x180' src={KevinPic} />
        <Figure.Caption>and this is kevin</Figure.Caption>
      </Figure>
    </StyledAboutUs>
  )
}

export default AboutUs
