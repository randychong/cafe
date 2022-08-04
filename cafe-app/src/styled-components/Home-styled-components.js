import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-bottom: 2rem;
    width: 100%;
`

export const Banner = styled.img`
width: 100%;
align-self: center;
height: 30rem;
object-fit: cover;
object-position: 50% 50%;

@media (max-width: 600px) {
    height: 20rem;
}
`