import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DashBoard = () => {
  const salesChartRef = useRef(null);
  const userChartRef = useRef(null);

  useEffect(() => {
    const ctx1 = salesChartRef.current.getContext('2d');
    const ctx2 = userChartRef.current.getContext('2d');

    // Sales Chart (Line)
    const salesChart = new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Sales',
          data: [120, 150, 180, 220, 260, 300],
          backgroundColor: 'rgba(46, 125, 50, 0.2)',
          borderColor: '#2E7D32',
          borderWidth: 2,
          tension: 0.4,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' }
        }
      }
    });

    // User Growth Chart (Bar)
    const userChart = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Users',
          data: [100, 130, 160, 200, 240, 300],
          backgroundColor: '#4CAF50',
          borderColor: '#2E7D32',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' }
        }
      }
    });

    // Cleanup chart instances when the component is unmounted
    return () => {
      salesChart.destroy();
      userChart.destroy();
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-green-700 text-white p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-6">EcoTrade Admin</h2>
        <ul className="space-y-4">
          <li><a href="#" className="hover:text-green-200">Dashboard</a></li>
          <li><a href="#" className="hover:text-green-200">Users</a></li>
          <li><a href="#" className="hover:text-green-200">Products</a></li>
          <li><a href="#" className="hover:text-green-200">Orders</a></li>
          <li><a href="#" className="hover:text-green-200">Eco Score</a></li>
          <li><a href="#" className="hover:text-green-200">Analytics</a></li>
          <li><a href="#" className="hover:text-green-200">Settings</a></li>
          <li><a href="#" className="hover:text-green-300 font-semibold">Logout</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Admin Dashboard</h1>

        {/* Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Users', value: '1,245' },
            { label: 'Active Products', value: '320' },
            { label: 'Orders Completed', value: '567' },
            { label: 'Eco Score', value: '85%' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold text-gray-700">{stat.label}</h3>
              <p className="text-2xl font-bold text-green-600">{stat.value}</p>
            </div>
          ))}
        </section>

        {/* Charts */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Sales Analytics</h3>
            <canvas ref={salesChartRef}></canvas>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">User Growth</h3>
            <canvas ref={userChartRef}></canvas>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashBoard;
