import React from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const TemperatureChart = ({ data }) => {
  const chartData = {
    labels: data.map(station => station.name),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.map(station => station.mean_temp),
        backgroundColor: 'rgba(0, 102, 204, 0.6)',
        borderColor: 'rgba(0, 102, 204, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
      },
    },
  };

  return (
    <div>
      <h2>Temperature Chart</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

TemperatureChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      mean_temp: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TemperatureChart;