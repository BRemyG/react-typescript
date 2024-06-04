import { render } from '@testing-library/react';

import SignIn from './sign_in';

describe('SignIn', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignIn />);
    expect(baseElement).toBeTruthy();
  });
});
