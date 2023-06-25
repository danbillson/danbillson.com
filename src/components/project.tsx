import { styled } from 'styled-components'
import { Github, ExternalLink } from 'lucide-react'

export default function Project({ title, body, link, github }) {
  return (
    <div>
      <Heading>
        <Title>{title}</Title>
        <Links>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={24} />
          </a>
          <a href={github}>
            <Github size={24} />
          </a>
        </Links>
      </Heading>
      <Body>{body}</Body>
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

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${({ theme }) => theme.colors.fg};
  }
`

const Links = styled.div`
  display: flex;
  gap: 1rem;
`
