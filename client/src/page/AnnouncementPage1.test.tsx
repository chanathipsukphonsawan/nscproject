import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import AnnouncementPage from './Announcement1page';
import { test } from '@jest/globals';
  
test("back to homepage", () => {
    render(<AnnouncementPage />);
    const backButton = screen.getByText(/กลับไปยังหน้าหลัก/i);
    expect(backButton).toBeInTheDocument();
  });
  
test("renders announcement content", () => {
    render(<AnnouncementPage />);
    const announcementContent = screen.getByText(/การแข่งขัน/i);
    expect(announcementContent).toBeInTheDocument();
});

