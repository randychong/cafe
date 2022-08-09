import React from 'react';
import { 
    Container,
    SocialIcon,
    FooterText
 } from '../styled-components/Footer-styled-components';
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import Facebook from "../assets/facebook.png";

export default function Footer() {
  return (
    <div>
        <Container>
            <Container>
                <SocialIcon src={Instagram}/>
                <SocialIcon src={Twitter}/>
                <SocialIcon src={Facebook}/>
            </Container>

            <FooterText>
                ©2021 The Bobarista
            </FooterText>
        </Container>
    </div>
  )
}
