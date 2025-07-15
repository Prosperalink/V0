import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import ContactForm from '../../src/components/ContactForm';

// Mock the AnimationObserver component
jest.mock('../../src/components/AnimationObserver', () => {
  return function MockAnimationObserver(
    props: Record<string, unknown> & { children?: React.ReactNode }
  ) {
    return (
      <div data-testid="animation-observer" {...props}>
        {props.children}
      </div>
    );
  };
});

describe('ContactForm', () => {
  beforeEach(() => {
    render(<ContactForm />);
  });

  describe('Form Rendering', () => {
    it('renders step indicator', () => {
      expect(screen.getByText(/step 1 of 3/i)).toBeInTheDocument();
      expect(screen.getByText(/33% complete/i)).toBeInTheDocument();
    });

    it('renders first step form fields', () => {
      expect(
        screen.getByPlaceholderText(/enter your full name/i)
      ).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText(/enter your email address/i)
      ).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText(/enter your phone number/i)
      ).toBeInTheDocument();
    });

    it('renders next step button', () => {
      expect(
        screen.getByRole('button', { name: /next step/i })
      ).toBeInTheDocument();
    });
  });
});
