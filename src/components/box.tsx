import { styled } from "styled-components";

export default styled.div<{ large?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  color: ${({ theme }) => theme.colors.bg};
  background-color: ${({ theme }) => theme.colors.fg};

  ${({ large }) =>
    large
      ? `
        height: 50vh;

        @media screen and (min-width: 768px) {
          height: 80vh;
        }
      `
      : ""}

  @media screen and (min-width: 768px) {
    width: calc(100% - 2rem);
    margin: 0 auto 1rem;
    padding: 0;
    border-radius: 1.5rem;
  }
`;
