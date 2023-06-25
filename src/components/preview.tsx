import { styled } from 'styled-components'

export default function Preview({ title, body, link, length }) {
  return (
    <div>
      <Title>{title}</Title>
      <Body>{body}</Body>
      <p>
        <Anchor href={link}>Read more</Anchor> . {length} minute read
      </p>
    </div>
  )
}

const Title = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Bodoni Moda', serif;
`

const Body = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const Anchor = styled.a`
  color: ${({ theme }) => theme.colors.bg};
`
