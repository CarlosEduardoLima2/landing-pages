import styled from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.footer`
  text-align: center;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.mediumGray};

  a {
    color: inherit;
    text-decoration: none;
    font-size: ${({ theme }) => theme.fonts.sizes.small};
  }

  & ${TextComponent} {
    font-size: ${({ theme }) => theme.fonts.sizes.small};
  }
  & ${SectionContainer} {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
