import React from 'react'
import { Container, Banner } from "../styled-components/Home-styled-components";
import BannerImage from "../assets/pastry-and-coffee-horizontal.jpg";

export default function Home() {
  return (
    <div>
        <Container>
          <Banner src={BannerImage} />
        </Container>
    </div>
  )
}
