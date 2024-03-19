import { screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="https://localhost">MenuLink</MenuLink>);
    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute('target', '_self');
  });

  it('should render open in a new tab', () => {
    renderTheme(
      <MenuLink link="https://localhost" newTab={true}>
        MenuLink
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute('target', '_blank');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link="https://localhost" newTab={false}>
        MenuLink
      </MenuLink>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
