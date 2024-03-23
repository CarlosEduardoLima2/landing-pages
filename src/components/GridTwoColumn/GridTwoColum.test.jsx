import { GridTwoColum } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<GridTwoColum />', () => {
  it('should render grid with two columns', () => {
    const { container } = renderTheme(<GridTwoColum {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
