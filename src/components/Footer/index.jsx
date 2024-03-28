import P from 'prop-types';
import * as Styled from './styles';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export const Footer = ({ footerHtml }) => {
  return (
    <SectionContainer>
      <Styled.Container>
        <TextComponent>{footerHtml}</TextComponent>
      </Styled.Container>
    </SectionContainer>
  );
};

Footer.propTypes = {
  footerHtml: P.string.isRequired,
};
