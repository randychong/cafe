import React from 'react'
import { 
  Container, 
  Banner, 
  Button,
  ButtonContainer
} from "../styled-components/Home-styled-components";
import BannerImage from "../assets/pastry-and-coffee-horizontal.jpg";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
        <Container>
          <Banner src={BannerImage} />
          <ButtonContainer>
            <NavLink to="/menu">
              <Button>View Menu</Button>
            </NavLink>
          </ButtonContainer>
        </Container>
    </div>
  )
}
