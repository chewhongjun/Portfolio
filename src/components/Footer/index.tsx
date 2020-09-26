import React from 'react';
import Container from 'components/ui/Container';
import Icon from 'components/ui/Icon';
import * as Styled from './styles';

const linkDatas = [
  {
    name: 'Github',
    url: 'https://github.com/Sharvin26',
    icon: ['fab', 'github']
  },
  {
    name: 'FreeCodeCamp',
    url: 'https://www.freecodecamp.org/news/author/sharvin',
    icon: ['fab', 'free-code-camp']
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/sharvinshah26',
    icon: ['fab', 'twitter']
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sharvinshah/',
    icon: ['fab', 'linkedin']
  },
  {
    name: 'StackOverFlow',
    url: 'https://stackoverflow.com/users/9890192/sharvin26',
    icon: ['fab', 'stack-overflow']
  }
];

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        {linkDatas.map((linkData, index) => (
          <React.Fragment key={index}>
            <Styled.Link href={linkData.url} rel="noreferrer noopener" target="_blank">
              <Styled.ResponsivDiv>
                <Styled.ResponsiveIcon>
                  <Icon icon={linkData.icon} className="mr-1" />
                </Styled.ResponsiveIcon>
                <Styled.ResponsiveText> {linkData.name}</Styled.ResponsiveText>
              </Styled.ResponsivDiv>
            </Styled.Link>
          </React.Fragment>
        ))}
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;

