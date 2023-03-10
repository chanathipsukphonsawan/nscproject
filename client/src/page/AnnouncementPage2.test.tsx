import { render, screen } from '@testing-library/react';
import Announcementpage2 from './Announcement2page';


test("back to index", () => {
    render(<Announcementpage2 />);
    const backButton = screen.getByText(/กลับไปยังหน้าหลัก/i);
    expect(backButton).toBeInTheDocument();
  });