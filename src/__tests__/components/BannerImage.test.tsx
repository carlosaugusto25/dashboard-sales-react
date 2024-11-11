import { render } from '@testing-library/react';
import 'jest-styled-components';
import { BannerImage } from '@/components';

test('render BannerImage with correct style', () => {
    const { container } = render(<BannerImage />);
    expect(container.firstChild).toHaveStyleRule('background-image', 'url(/banner-login.jpg)');
    expect(container.firstChild).toHaveStyleRule('background-size', 'cover');
    expect(container.firstChild).toHaveStyleRule('background-repeat', 'no-repeat');
    expect(container.firstChild).toHaveStyleRule('height', '100vh');
    expect(container.firstChild).toHaveStyleRule('width', '50vw');
})