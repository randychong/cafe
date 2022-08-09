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
        <Container main>
            <Container>
                <a href="https://www.instagram.com/">
                    <SocialIcon src={Instagram}/>
                </a>
                <a href="https://www.twitter.com/">
                    <SocialIcon src={Twitter}/>
                </a>
                <a href="https://www.facebook.com/">
                    <SocialIcon src={Facebook}/>
                </a>
            </Container>

            <FooterText>
                ©2021 The Bobarista
            </FooterText>
        </Container>
    </div>
  )
}
