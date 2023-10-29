import { styled } from "styled-components";

export default function Grid({ title, children }) {
  return (
    <Container>
      <h3>{title}</h3>
      <Items>{children}</Items>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem 5%;
  max-width: 1024px;

  h3 {
    font-size: 2rem;
  }
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem 5rem;
  }
`;
