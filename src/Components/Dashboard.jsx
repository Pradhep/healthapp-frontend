import '../index.css';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';
import toast from 'react-hot-toast';
import { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';

// Register components for chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

function Dashboard() {
  const [calburnt, setCalburnt] = useState(0);
  const [calintake, setCalintake] = useState(0);
  const [exerciseData, setExerciseData] = useState([]);
  const [foodData, setFoodData] = useState([]);

  const chartRef = useRef(null);  // Add useRef hook for chart reference
  const userId = sessionStorage.getItem('loginuserId');

  const getData = async () => {
    try {
      let { message, exerciseData, foodData, totalExerciseCalories, totalFoodCalories } = await AxiosService.get(
        `${ApiRoutes.Dashboarddata.path}?userId=${userId}`,
        { authenticate: ApiRoutes.Dashboarddata.auth }
      );
      setCalburnt(parseInt(totalExerciseCalories) || 0);
      setCalintake(parseInt(totalFoodCalories) || 0);
      setExerciseData(exerciseData);
      setFoodData(foodData);
      toast.success(message);
    } catch (error) {
      toast.error(error.message || 'Internal Server Error');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Prepare data for the chart
  const chartData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'], // Sample labels for time/days
    datasets: [
      {
        label: 'Calories Burnt',
        data: [calburnt, calburnt - 100, calburnt + 50, calburnt - 150, calburnt + 70, calburnt - 30], // Example data for burnt
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4, // This creates the "wave" effect
        pointRadius: 5,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
      },
      {
        label: 'Calories Gained',
        data: [calintake, calintake + 50, calintake - 100, calintake + 70, calintake - 50, calintake + 30], // Example data for gained
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.4, // This creates the "wave" effect
        pointRadius: 5,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Calories Burnt vs Gained Over Time',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    // Clean up the chart instance if it exists before rendering a new one
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();  // Destroy chart instance before unmounting or rerendering
      }
    };
  }, []);

  return (
    <section className="section main-section">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-6">
        <div className="card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div className="widget-label">
                <h3>Calories Burnt</h3>
                <h1>{calburnt}</h1>
              </div>
              <span className="icon widget-icon text-green-500">
                <i className="mdi mdi-account-multiple mdi-48px"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div className="widget-label">
                <h3>Calories Gained</h3>
                <h1>{calintake}</h1>
              </div>
              <span className="icon widget-icon text-blue-500">
                <i className="mdi mdi-cart-outline mdi-48px"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-6">
        <header className="card-header">
          <p className="card-header-title">
            <span className="icon"><i className="mdi mdi-finance"></i></span>
            Performance
          </p>
        </header>

        <div className="card-content">
          <div className="chart-area">
            <Line ref={chartRef} data={chartData} options={options} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
