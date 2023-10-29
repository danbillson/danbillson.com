import { styled } from "styled-components";

import Box from "./box";
import Social from "../components/social";

export default function Hero({ title, tagline, image }) {
  return (
    <Box large>
      <Content>
        <div>
          <Title>{title}</Title>
          <Tagline>{tagline}</Tagline>
          <Social header />
        </div>
        <img src={image} alt="Coding" />
      </Content>
    </Box>
  );
}

const Content = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 3rem;
  max-width: 1024px;

  img {
    display: none;
    height: 50vh;
    justify-self: center;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 3rem;

    img {
      display: block;
    }
  }
`;

const Title = styled.h1`
  margin-top: 0;
  font-size: 3rem;
  font-family: var(--font-heading);
`;

const Tagline = styled.p`
  max-width: 395px;
`;
