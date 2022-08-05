import React from 'react'
import { 
  Banner, 
  BannerContainer, 
  Button,
  ButtonContainer,
  InfoContainer
} from "../styled-components/Home-styled-components";
import BannerImage from "../assets/pastry-and-coffee-horizontal.jpg";
import { NavLink } from "react-router-dom";

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
          
        </InfoContainer>
    </div>
  )
}
