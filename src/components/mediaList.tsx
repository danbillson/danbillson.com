import { styled } from 'styled-components'

type MediaGroupProps = {
  title: string
  children: React.ReactNode
}

function MediaGroup({ title, children }: MediaGroupProps) {
  return (
    <MediaSection>
      <MediaHeading>{title}</MediaHeading>
      <MediaBody>
        <ul>{children}</ul>
      </MediaBody>
    </MediaSection>
  )
}

type MediaProps = {
  list: {
    [month: string]: {
      [category: string]: {
        title: string
        info: string
        emoji: string
      }[]
    }
  }
}

export default function Media({ list }: MediaProps) {
  return (
    <Container>
      {Object.entries(list).map(([month, media]) => {
        return (
          <MediaWrapper key={month}>
            <h4>{month}</h4>
            <MediaGrid>
              {Object.entries(media).map(([category, films]) => (
                <MediaGroup key={month + category} title={category}>
                  {films?.map(({ title, info, emoji }) => (
                    <EmojiLi key={title} emoji={emoji}>
                      {title} <Info>{info}</Info>
                    </EmojiLi>
                  ))}
                </MediaGroup>
              ))}
            </MediaGrid>
          </MediaWrapper>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1024px;
`

const MediaWrapper = styled.div`
  padding: 2rem 0;
  width: 100%;

  h4 {
    margin: 0;
    padding: 0.5rem 1rem;
  }
`

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const MediaHeading = styled.div`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
`

const MediaSection = styled.div`
  &:nth-child(2) {
    ${MediaHeading} {
      background-color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`

const MediaBody = styled.div`
  padding: 0.5rem;
`

const EmojiLi = styled.li<{ emoji: string }>`
  margin: 0.5rem 0;
  padding-left: 0.5rem;
  list-style-type: '${({ emoji }) => emoji}';
`

const Info = styled.span`
  color: #a0a29d;
  font-size: 0.8rem;
`
