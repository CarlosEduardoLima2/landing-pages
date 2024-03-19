import { screen } from '@testing-library/react';
import { TextComponent } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>TextComponent</TextComponent>);
    expect(screen.getByText('TextComponent')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>TextComponent</TextComponent>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
