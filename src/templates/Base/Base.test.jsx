import { screen } from '@testing-library/react';
import { Base } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Base />', () => {
  it('should render', () => {
    renderTheme(<Base>Base</Base>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
