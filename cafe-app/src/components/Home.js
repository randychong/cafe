import React from 'react'
import { 
  Container, 
  Banner, 
  Button 
} from "../styled-components/Home-styled-components";
import BannerImage from "../assets/pastry-and-coffee-horizontal.jpg";

export default function Home() {
  return (
    <div>
        <Container>
          <Banner src={BannerImage} />
          <Button>View Menu</Button>
        </Container>
    </div>
  )
}
