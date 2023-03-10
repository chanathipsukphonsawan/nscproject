import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import Certificatepage from './certificatepage'

    test('"ดาวน์โหลดใบประกาศนียบัตร"button', () => {
        render(<Certificatepage />);
        const checkStatusButton = screen.getByText(/ดาวน์โหลดใบประกาศนียบัตร/i);
        expect(checkStatusButton).toBeInTheDocument();
    });


    test("ตัวอย่างใบประกาศนียบัตร", () => {
        render(<Certificatepage />);
        const checkStatusButton = screen.getByText(/ตัวอย่างใบประกาศนียบัตร/i);
        expect(checkStatusButton).toBeInTheDocument();
    }); 