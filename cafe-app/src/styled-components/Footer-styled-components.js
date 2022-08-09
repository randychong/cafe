import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: ${(props) => props.main ? "column" : ""};
    place-items: center;
    border-top: 1px lightgray solid;
`

export const SocialIcon = styled.img`
    height: 2rem;
    margin: 1rem;
`

export const FooterText = styled.p`
`