import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './login';

describe('Login page', () => {
  it('should log in successfully when correct user credentials are entered', async () => {
    render(
    <MemoryRouter>
        <Login />
    </MemoryRouter>    
    );
    const identifierInput = screen.getByLabelText('ID (ชื่อรหัสโครงการ)');
    const passwordInput = screen.getByLabelText('รหัสผ่าน');
    const loginButton = screen.getByRole('button', { name: 'เข้าสู่ระบบ' });

    fireEvent.change(identifierInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(loginButton);

    const successMessage = await screen.findByText('Login successful');
    expect(successMessage).toBeInTheDocument();
  });

  it('should display an error message when incorrect user credentials are entered', async () => {
    render(<Login />);
    const identifierInput = screen.getByLabelText('ID (ชื่อรหัสโครงการ)');
    const passwordInput = screen.getByLabelText('รหัสผ่าน');
    const loginButton = screen.getByRole('button', { name: 'เข้าสู่ระบบ' });

    fireEvent.change(identifierInput, { target: { value: 'invaliduser' } });
    fireEvent.change(passwordInput, { target: { value: 'invalidpassword' } });
    fireEvent.click(loginButton);

    const errorMessage = await screen.findByText('Invalid credentials');
    expect(errorMessage).toBeInTheDocument();
  });
});
