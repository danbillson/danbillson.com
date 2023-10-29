import { styled } from "styled-components";

export default function Event({ name, year, body }) {
  return (
    <div>
      <Name>{name}</Name>
      <Year>{year}</Year>
      <p>{body}</p>
    </div>
  );
}

const Name = styled.h4`
  margin-bottom: 0;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: var(--font-heading);
`;

const Year = styled.span`
  display: block;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.secondary};
`;
