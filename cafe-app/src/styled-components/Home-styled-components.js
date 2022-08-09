import styled from "styled-components";

export const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    width: 100%;
    justify-content: center;
    place-items: center;
`

export const Banner = styled.img`
    width: 100%;
    height: 30rem;
    object-fit: cover;

    @media (max-width: 600px) {
        height: 20rem;
    }
`

export const Button = styled.button`
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

export const ButtonContainer = styled.div`
    position: absolute;
`

export const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const InfoSection = styled.div`
    display: flex;
    width: 100%;
    height: 35rem;
    margin-bottom: 2rem;
    justify-content: space-between;
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "")};

    @media (max-width: 600px) {
        flex-direction: ${(props) => (props.reverse ? "column" : "column")};
        height: 25rem;
    }

`
export const InfoImage = styled.img`
    width: 30rem;
    height: 100%;
    object-fit: cover;

    @media (max-width: 600px) {
        width: 100%;
        height: 20rem;
        object-position: 50% 80%;
    }
`

export const InfoText = styled.p`
`

export const TextContainer = styled.div`
    width: 35rem;
    height: 100%;
    display: flex;
    justify-content: center;
    place-items: center;
    margin-left: ${(props) => (props.main ? "auto" : "")};
    margin-right: ${(props) => (props.main ? "auto" : "")};

    @media (max-width: 600px) {
        width: 100%;
    }
`