import React from 'react';
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [4000, 3000, 5000, 7000, 6000, 8000],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Dashboard;