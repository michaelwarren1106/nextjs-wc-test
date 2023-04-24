// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react';
import Page from '../src/app/page';
import '@testing-library/jest-dom';

import '../src/app/test-wc';

describe('Home', () => {
  it('renders a custom element', async () => {
    render(<Page />)

    const greeting = document.querySelector('simple-greeting');
    await greeting.updateComplete;

    console.log(greeting.shadowRoot.innerHTML)
    expect(greeting.name).toBeTruthy();
  })
})