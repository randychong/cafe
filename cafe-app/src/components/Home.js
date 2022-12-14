import React from 'react'
import { NavLink } from "react-router-dom";
import { 
  Banner, 
  BannerContainer, 
  Button,
  ButtonContainer,
  InfoContainer,
  InfoSection,
  InfoImage,
  InfoText,
  TextContainer
} from "../styled-components/Home-styled-components";
import BannerImage from "../assets/pastry-and-coffee-horizontal.jpg";
import CoffeeSampler from "../assets/coffee-sampler.jpg";
import MacaronStack from "../assets/macaron-stack.jpg";
import SeaCreamTea from "../assets/sea-cream-tea.jpg";
import Footer from './Footer';

export default function Home() {
  return (
    <div>
        <BannerContainer>
          <Banner src={BannerImage} />
          <ButtonContainer>
            <NavLink to="/menu">
              <Button>View Menu</Button>
            </NavLink>
          </ButtonContainer>
        </BannerContainer>

        <TextContainer main>
          <InfoText>
            Opening info text.
          </InfoText>
        </TextContainer>

        <InfoContainer>
          <InfoSection>
            <InfoImage src={SeaCreamTea}/>
            <TextContainer>
              <InfoText>
                Info text for section 1.
              </InfoText>
            </TextContainer>
          </InfoSection>

          <InfoSection reverse>
            <InfoImage src={MacaronStack}/>
            <TextContainer>
              <InfoText>
                Info text for section 2.
              </InfoText>
            </TextContainer>
          </InfoSection>

          <InfoSection>
            <InfoImage src={CoffeeSampler}/>
            <TextContainer>
              <InfoText>
                Info text for section 3.
              </InfoText>
            </TextContainer>
          </InfoSection>
        </InfoContainer>

        <Footer />
    </div>
  )
}
