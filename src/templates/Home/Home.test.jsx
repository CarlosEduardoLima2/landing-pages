import { screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/render-theme';

test('renders learn react link', () => {
  renderTheme(<Home />);

  const headingContainer = screen.getByRole('heading', { name: 'Hello' }).parentElement;

  expect(headingContainer).toMatchSnapshot();
});
