import { styled } from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <Container>
      <Link href="/media">media</Link>
      <Logo href="/">
        D<Long>anBillson</Long>
        <Highlight>.</Highlight>
      </Logo>
      <Link href="/cheer">cheer</Link>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  font-weight: 300;

  a {
    color: ${({ theme }) => theme.colors.fg};
    text-decoration: none;
    cursor: pointer;
    transition: color 0.23s ease-in-out;
  }
`;

const Logo = styled(Link)`
  margin: 0 2rem;
  font-size: 2rem;
  font-weight: 700;
`;

const Long = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const Anchor = styled(Link)`
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
