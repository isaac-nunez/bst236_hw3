// filepath: /temperature-dashboard/temperature-dashboard/tests/app.test.js

import { render, screen } from '@testing-library/react';
import App from '../src/app';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Sidebar from '../src/components/Sidebar';
import TemperatureChart from '../src/components/TemperatureChart';

describe('Temperature Dashboard App', () => {
  test('renders header', () => {
    render(<Header />);
    const titleElement = screen.getByText(/Temperature in train stations around the globe/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders footer', () => {
    render(<Footer />);
    const footerElement = screen.getByText(/Created by team PICE for BST 236/i);
    expect(footerElement).toBeInTheDocument();
  });

  test('renders sidebar', () => {
    render(<Sidebar />);
    const sidebarElement = screen.getByLabelText(/Select Stations/i);
    expect(sidebarElement).toBeInTheDocument();
  });

  test('renders temperature chart', () => {
    render(<TemperatureChart />);
    const chartElement = screen.getByRole('img', { name: /Temperature Chart/i });
    expect(chartElement).toBeInTheDocument();
  });

  test('renders the main app', () => {
    render(<App />);
    const appElement = screen.getByText(/Temperature in train stations around the globe/i);
    expect(appElement).toBeInTheDocument();
  });
});