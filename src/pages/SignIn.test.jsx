import { render, screen, fireEvent } from '@testing-library/react';
import SignIn from './SignIn';
import { vi } from 'vitest';
import { useNavigate } from 'react-router-dom';

// Mock react-router-dom
vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
}));

// Enhanced localStorage mock
const mockLocalStorage = {
  store: {} as Record<string, string>,
  getItem: vi.fn((key: string) => mockLocalStorage.store[key]),
  setItem: vi.fn((key: string, value: string) => {
    mockLocalStorage.store[key] = value;
  }),
  clear: vi.fn(() => {
    mockLocalStorage.store = {};
  }),
};

beforeAll(() => {
  Object.defineProperty(window, 'localStorage', {
    value: mockLocalStorage,
    writable: true,
  });
});

beforeEach(() => {
  // Clear all mocks before each test
  vi.clearAllMocks();
  mockLocalStorage.clear();
});

describe('SignIn Component', () => {
  test('successful sign-in sets authentication and navigates to home', () => {
    const mockNavigate = vi.fn();
    (useNavigate as vi.Mock).mockReturnValue(mockNavigate);

    render(<SignIn />);

    // Get form elements
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    // Simulate user input
    fireEvent.change(emailInput, { target: { value: 'test@example.com' });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    // Verify localStorage was updated
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
      'isAuthenticated', 
      'true'
    );

    // Verify navigation occurred
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  test('shows error message with invalid credentials', () => {
    render(<SignIn />);
    
    const submitButton = screen.getByRole('button', { name: /sign in/i });
    fireEvent.click(submitButton);

    expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
    expect(mockLocalStorage.setItem).not.toHaveBeenCalled();
  });
});