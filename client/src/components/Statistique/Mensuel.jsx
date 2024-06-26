import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const CustomLineChart = ({ specialite }) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      label: '',
      data: [],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      pointBackgroundColor: 'rgb(75, 192, 192)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
      fill: true
    }]
  });

  const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
                      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(`${apiUrl}/stats/GetStats`);
        const yearData = response.data.filter(d =>
          new Date(d.date).getFullYear() === 2024 &&
          (specialite === 'default' || d.spe === specialite)
        );

        const monthlyData = new Array(12).fill(0).map(() => []);
        yearData.forEach(item => {
          const month = new Date(item.date).getMonth();
          monthlyData[month].push(parseFloat(item.scoreTotal));
        });

        const labels = monthNames;
        const scores = monthlyData.map((data, index) => {
          if (data.length === 0) {
            return null;
          }
          const sum = data.reduce((acc, curr) => acc + curr, 0);
          return (sum / data.length).toFixed(2);
        });

        setChartData({
          labels,
          datasets: [{
            label: `Score Moyen Mensuel pour ${specialite === "default" ? "toutes spécialités" : specialite}`,
            data: scores,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            pointBackgroundColor: 'rgb(75, 192, 192)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            fill: true,
            spanGaps: true
          }]
        });
      } catch (error) {
        console.error("Erreur lors de la récupération des statistiques mensuelles", error);
      }
    };

    fetchStats();
  }, [specialite]);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Line
        data={chartData}
        options={{
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Mois'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Score Moyen'
              }
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'top'
            },
            tooltip: {
              mode: 'index',
              intersect: false
            },
            hover: {
              mode: 'nearest',
              intersect: true
            }
          }
        }}
        key={specialite}
      />
    </div>
  );
}

export default CustomLineChart;








  
 