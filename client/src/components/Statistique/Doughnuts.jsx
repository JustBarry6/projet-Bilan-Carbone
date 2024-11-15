import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import './Doughnuts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faCar, faUtensils, faHome, faCogs } from '@fortawesome/free-solid-svg-icons';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart, ArcElement, Tooltip, Legend, plugins } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const CustomChart = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [chartData, setChartData] = useState(null);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
        color: 'black',
        formatter: (value) => value.toFixed(2),
      }
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart'
    }
  };

  const sectorIcons = {
    Transport: faCar,
    Alimentation: faUtensils,
    Logement: faHome,
    Biens: faDesktop,
    Services: faCogs
  };

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(`${apiUrl}/stats/GetStats`);
        if (response.data && response.data.length) {
          const totals = response.data.reduce((acc, curr) => {
            acc.transport += parseFloat(curr.transport);
            acc.alimentation += parseFloat(curr.alimentation);
            acc.logement += parseFloat(curr.logement);
            acc.biens += parseFloat(curr.biens);
            acc.services += parseFloat(curr.services);
            return acc;
          }, { transport: 0, alimentation: 0, logement: 0, biens: 0, services: 0 });

          const totalValues = [
            totals.transport,
            totals.alimentation,
            totals.logement,
            totals.biens,
            totals.services
          ];

          setChartData({
            labels: ['Transport', 'Alimentation', 'Logement', 'Biens', 'Services'],
            datasets: [{
              data: totalValues,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#4BC0C0'],
              hoverOffset: 4
            }]
          });
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données pour le graphique Doughnut', error);
      }
    };

    fetchStats();
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  const total = chartData.datasets[0].data.reduce((sum, value) => sum + value, 0);

  return (
    <div className="chart-container">
      <div className="chart">
        <Doughnut data={chartData} options={options} />
      </div>
      <hr className="shrink-0 self-stretch mt-5 h-px border border-solid bg-slate-200 border-slate-200" />
      <div className="legend-container">
      <h2 className="legend-title">
        <FontAwesomeIcon icon={faChartPie} className="mr-2" /> Secteurs :
      </h2>
        <div className="legend space-y-2 justify-center">
        {chartData.labels.map((label, index) => {
          const value = chartData.datasets[0].data[index];
          const color = chartData.datasets[0].backgroundColor[index];
          const percentage = ((value / total) * 100).toFixed(2);
          const icon = sectorIcons[label]; // Récupérer l'icône correspondante
          return (
            <div key={index} className="legend-item">
            <div className="legend-content">
            <span className="legend-color" style={{ backgroundColor: color }}>
            <FontAwesomeIcon icon={icon} className="legend-icon" />
            </span>
            <span className="legend-text">{`${label}: ${value.toFixed(2)} tCO2e (${percentage}%)`}</span>
            </div>
            </div>
          );
        })}

        </div>
      </div>
    </div>
  );
};

export default CustomChart;
