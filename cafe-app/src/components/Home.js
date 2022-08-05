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
  InfoText
} from "../styled-components/Home-styled-components";
import BannerImage from "../assets/pastry-and-coffee-horizontal.jpg";
import CoffeeSampler from "../assets/coffee-sampler.jpg";
import MacaronStack from "../assets/macaron-stack.jpg";
import SeaCreamTea from "../assets/sea-cream-tea.jpg";

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

        <InfoContainer>
          <InfoSection>
            <InfoImage src={SeaCreamTea}/>
            <InfoText>
              Info text for section 1.
            </InfoText>
          </InfoSection>

          <InfoSection>
            <InfoText>
            Info text for section 2.
            </InfoText>
            <InfoImage src={MacaronStack}/>
          </InfoSection>

          <InfoSection>
            <InfoImage src={CoffeeSampler}/>
            <InfoText>
            Info text for section 3.
            </InfoText>
          </InfoSection>
        </InfoContainer>
    </div>
  )
}
