import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    width: 100%;
    justify-content: center;
    place-items: center;
`

export const Banner = styled.img`
    width: 100%;
    align-self: center;
    height: 30rem;
    object-fit: cover;

    @media (max-width: 600px) {
        height: 20rem;
    }
`

export const Button = styled.button`
    position: absolute;
    margin-top: 12rem;
    width: 15rem;
    height: 3rem;
    background: rgba(248, 248, 248, 0.9);
    border-radius: 3px;
    border: none;
    transition: 200ms ease;
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        color: #00B6BC;
    }
`