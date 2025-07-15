import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';

import QualityDemo from '../../src/components/QualityDemo';

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

// Mock the formatDate utility
jest.mock('../../src/utils', () => ({
  formatDate: jest.fn(() => '2024-01-01'),
}));

describe('QualityDemo', () => {
  const defaultProps = {
    title: 'Test Demo',
    onDataSubmit: jest.fn(),
    isEnabled: true,
    maxItems: 5,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Component Rendering', () => {
    it('renders without crashing', () => {
      render(<QualityDemo {...defaultProps} />);
      expect(screen.getByTestId('animation-observer')).toBeInTheDocument();
    });

    it('displays the provided title', () => {
      render(<QualityDemo {...defaultProps} />);
      expect(screen.getByText('Test Demo')).toBeInTheDocument();
    });

    it('renders form fields correctly', () => {
      render(<QualityDemo {...defaultProps} />);

      expect(screen.getByLabelText(/name \*/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email \*/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/message \*/i)).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /submit/i })
      ).toBeInTheDocument();
    });

    it('shows disabled state when isEnabled is false', () => {
      render(<QualityDemo {...defaultProps} isEnabled={false} />);

      expect(
        screen.getByText(/component is currently disabled/i)
      ).toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: /submit/i })
      ).not.toBeInTheDocument();
    });
  });

  describe('Form Interaction', () => {
    it('updates form fields on user input', async () => {
      const user = userEvent.setup();
      render(<QualityDemo {...defaultProps} />);

      const nameInput = screen.getByLabelText(/name \*/i);
      const emailInput = screen.getByLabelText(/email \*/i);
      const messageInput = screen.getByLabelText(/message \*/i);

      await user.type(nameInput, 'John Doe');
      await user.type(emailInput, 'john@example.com');
      await user.type(messageInput, 'Test message');

      expect(nameInput).toHaveValue('John Doe');
      expect(emailInput).toHaveValue('john@example.com');
      expect(messageInput).toHaveValue('Test message');
    });

    it('clears errors when user starts typing', async () => {
      const user = userEvent.setup();
      render(<QualityDemo {...defaultProps} />);

      const nameInput = screen.getByLabelText(/name \*/i);
      const submitButton = screen.getByRole('button', { name: /submit/i });

      // Submit without filling required fields to trigger errors
      await user.click(submitButton);
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();

      // Start typing to clear error - wait for the error to be cleared
      await user.type(nameInput, 'John');
      await waitFor(() => {
        expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
      });
    });

    it('shows focus states correctly', async () => {
      const user = userEvent.setup();
      render(<QualityDemo {...defaultProps} />);

      const nameInput = screen.getByLabelText(/name \*/i);

      await user.click(nameInput);
      expect(nameInput).toHaveClass('border-blue-500');
    });
  });

  describe('Form Validation', () => {
    it('shows validation errors for empty required fields', async () => {
      const user = userEvent.setup();
      render(<QualityDemo {...defaultProps} />);

      const submitButton = screen.getByRole('button', { name: /submit/i });
      await user.click(submitButton);

      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });

    it('validates email format', async () => {
      const user = userEvent.setup();
      render(<QualityDemo {...defaultProps} />);

      const emailInput = screen.getByLabelText(/email \*/i);
      const submitButton = screen.getByRole('button', { name: /submit/i });

      await user.type(emailInput, 'invalid-email');
      await user.click(submitButton);

      expect(
        screen.getByText(/please enter a valid email address/i)
      ).toBeInTheDocument();
    });

    it('validates message length', async () => {
      const user = userEvent.setup();
      render(<QualityDemo {...defaultProps} />);

      const messageInput = screen.getByLabelText(/message \*/i);
      const submitButton = screen.getByRole('button', { name: /submit/i });

      // Create a message longer than 500 characters - use a more efficient approach
      const longMessage = 'a'.repeat(501);
      await user.clear(messageInput);
      await user.type(messageInput, longMessage);
      await user.click(submitButton);

      await waitFor(
        () => {
          expect(
            screen.getByText(/message must be less than 500 characters/i)
          ).toBeInTheDocument();
        },
        { timeout: 10000 }
      );
    }, 15000);

    it('submits form with valid data', async () => {
      const mockOnDataSubmit = jest.fn().mockResolvedValue(undefined);
      const user = userEvent.setup();

      render(<QualityDemo {...defaultProps} onDataSubmit={mockOnDataSubmit} />);

      // Fill form with valid data - use clear and type for reliability
      const nameInput = screen.getByLabelText(/name \*/i);
      const emailInput = screen.getByLabelText(/email \*/i);
      const messageInput = screen.getByLabelText(/message \*/i);

      await user.clear(nameInput);
      await user.type(nameInput, 'John Doe');
      await user.clear(emailInput);
      await user.type(emailInput, 'john@example.com');
      await user.clear(messageInput);
      await user.type(messageInput, 'Test message');

      const submitButton = screen.getByRole('button', { name: /submit/i });
      await user.click(submitButton);

      // Check loading state
      expect(screen.getByText(/submitting\.{3}/i)).toBeInTheDocument();
      expect(submitButton).toBeDisabled();

      // Wait for success state to appear (simpler approach)
      await waitFor(
        () => {
          expect(screen.getByText(/success!/i)).toBeInTheDocument();
        },
        { timeout: 10000 }
      );

      expect(mockOnDataSubmit).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Test message',
      });
    }, 15000);

    it('calls onDataSubmit when provided', async () => {
      const mockOnDataSubmit = jest.fn().mockResolvedValue(undefined);
      const user = userEvent.setup();

      render(<QualityDemo {...defaultProps} onDataSubmit={mockOnDataSubmit} />);

      // Fill and submit form
      await user.type(screen.getByLabelText(/name \*/i), 'John Doe');
      await user.type(screen.getByLabelText(/email \*/i), 'john@example.com');
      await user.type(screen.getByLabelText(/message \*/i), 'Test message');
      await user.click(screen.getByRole('button', { name: /submit/i }));

      await waitFor(() => {
        expect(mockOnDataSubmit).toHaveBeenCalled();
      });
    });

    it('handles submission errors gracefully', async () => {
      const mockOnDataSubmit = jest
        .fn()
        .mockRejectedValue(new Error('API Error'));
      const user = userEvent.setup();

      render(<QualityDemo {...defaultProps} onDataSubmit={mockOnDataSubmit} />);

      // Fill and submit form
      await user.type(screen.getByLabelText(/name \*/i), 'John Doe');
      await user.type(screen.getByLabelText(/email \*/i), 'john@example.com');
      await user.type(screen.getByLabelText(/message \*/i), 'Test message');
      await user.click(screen.getByRole('button', { name: /submit/i }));

      await waitFor(() => {
        expect(
          screen.getByText(/failed to submit form\. please try again\./i)
        ).toBeInTheDocument();
      });
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA labels and roles', () => {
      render(<QualityDemo {...defaultProps} />);

      expect(screen.getByRole('main')).toBeInTheDocument();
      expect(screen.getByLabelText(/name \*/i)).toHaveAttribute(
        'aria-invalid',
        'false'
      );
      expect(screen.getByLabelText(/email \*/i)).toHaveAttribute(
        'aria-invalid',
        'false'
      );
      expect(screen.getByLabelText(/message \*/i)).toHaveAttribute(
        'aria-invalid',
        'false'
      );
    });

    it('shows ARIA invalid state for fields with errors', async () => {
      const user = userEvent.setup();
      render(<QualityDemo {...defaultProps} />);

      const submitButton = screen.getByRole('button', { name: /submit/i });
      await user.click(submitButton);

      expect(screen.getByLabelText(/name \*/i)).toHaveAttribute(
        'aria-invalid',
        'true'
      );
      expect(screen.getByLabelText(/email \*/i)).toHaveAttribute(
        'aria-invalid',
        'true'
      );
      expect(screen.getByLabelText(/message \*/i)).toHaveAttribute(
        'aria-invalid',
        'true'
      );
    });

    it('provides error descriptions for screen readers', async () => {
      const user = userEvent.setup();
      render(<QualityDemo {...defaultProps} />);

      const submitButton = screen.getByRole('button', { name: /submit/i });
      await user.click(submitButton);

      const nameInput = screen.getByLabelText(/name \*/i);
      expect(nameInput).toHaveAttribute('aria-describedby', 'name-error');
    });
  });

  describe('Success State', () => {
    it('shows success message after successful submission', async () => {
      const user = userEvent.setup();
      render(<QualityDemo {...defaultProps} />);

      // Fill and submit form
      await user.type(screen.getByLabelText(/name \*/i), 'John Doe');
      await user.type(screen.getByLabelText(/email \*/i), 'john@example.com');
      await user.type(screen.getByLabelText(/message \*/i), 'Test message');
      await user.click(screen.getByRole('button', { name: /submit/i }));

      // Wait for submission to complete and success state to show
      await waitFor(
        () => {
          expect(screen.getByText(/success!/i)).toBeInTheDocument();
        },
        { timeout: 5000 }
      );

      expect(
        screen.getByText(/your form has been submitted successfully\./i)
      ).toBeInTheDocument();
    });

    it('shows success icon', async () => {
      const user = userEvent.setup();
      render(<QualityDemo {...defaultProps} />);

      // Fill and submit form
      await user.type(screen.getByLabelText(/name \*/i), 'John Doe');
      await user.type(screen.getByLabelText(/email \*/i), 'john@example.com');
      await user.type(screen.getByLabelText(/message \*/i), 'Test message');
      await user.click(screen.getByRole('button', { name: /submit/i }));

      // Wait for success state to show
      await waitFor(
        () => {
          const successIcon = screen.getByRole('img', { hidden: true });
          expect(successIcon).toBeInTheDocument();
        },
        { timeout: 5000 }
      );
    });
  });

  describe('Input Sanitization', () => {
    it('handles malicious input gracefully', async () => {
      const user = userEvent.setup();
      render(<QualityDemo {...defaultProps} />);

      const nameInput = screen.getByLabelText(/name \*/i);
      await user.type(nameInput, '<script>alert("xss")</script>John');

      // The component should handle malicious input without crashing
      expect(nameInput).toBeInTheDocument();
      expect(nameInput).toHaveValue('<script>alert("xss")</script>John');
    });

    it('handles javascript protocol input gracefully', async () => {
      const user = userEvent.setup();
      render(<QualityDemo {...defaultProps} />);

      const emailInput = screen.getByLabelText(/email \*/i);
      await user.type(emailInput, 'javascript:alert("xss")@example.com');

      // The component should handle malicious input without crashing
      expect(emailInput).toBeInTheDocument();
      expect(emailInput).toHaveValue('javascript:alert("xss")@example.com');
    });
  });

  describe('Keyboard Navigation', () => {
    it('supports Ctrl+Enter for form submission', async () => {
      const user = userEvent.setup();
      render(<QualityDemo {...defaultProps} />);

      // Fill form with clear and type for reliability
      const nameInput = screen.getByLabelText(/name \*/i);
      const emailInput = screen.getByLabelText(/email \*/i);
      const messageInput = screen.getByLabelText(/message \*/i);

      await user.clear(nameInput);
      await user.type(nameInput, 'John Doe');
      await user.clear(emailInput);
      await user.type(emailInput, 'john@example.com');
      await user.clear(messageInput);
      await user.type(messageInput, 'Test message');

      // Focus on message input and trigger Ctrl+Enter
      await user.click(messageInput);
      await user.keyboard('{Control>}{Enter}{/Control}');

      // Wait for success state to appear
      await waitFor(
        () => {
          expect(screen.getByText(/success!/i)).toBeInTheDocument();
        },
        { timeout: 10000 }
      );
    }, 15000);
  });
});
