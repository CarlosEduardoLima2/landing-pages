import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="logo" />);
    const heading = screen.getByRole('heading', { name: 'logo' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="logo" srcImg="img.png" />);
    const heading = screen.getByRole('heading', { name: 'logo' });
    expect(heading.firstChild.firstChild).toHaveAttribute('src', 'img.png');
  });

  it('should match snapshot', () => {
    renderTheme(<LogoLink link="#target" text="logo" srcImg="img.png" />);
    const heading = screen.getByRole('heading', { name: 'logo' });
    expect(heading.firstChild.firstChild).toMatchSnapshot();
  });
});
