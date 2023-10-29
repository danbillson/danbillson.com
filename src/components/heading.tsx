import { styled } from "styled-components";

import Box from "./box";

type HeadingProps = {
  title: string;
  body: string;
};

export default function Heading({ title, body }: HeadingProps) {
  return (
    <Box>
      <Content>
        <Title>{title}</Title>
        <p>{body}</p>
      </Content>
    </Box>
  );
}

const Content = styled.div`
  padding: 2rem 1rem;
  max-width: 600px;

  @media screen and (min-width: 768px) {
    padding: 6rem 1rem;
  }
`;

const Title = styled.h2`
  margin-top: 0;
  text-align: center;
  font-size: 2.5rem;
  font-family: var(--font-heading);
`;
