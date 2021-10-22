import { Radar } from 'react-chartjs-2';

const data = {
  labels: ['TECHNIQUE', 'PROCEDURAL', 'PHYSIQUE', 'ACQ&DEV', 'FORM&SENS', 'ACCINTERNET'],
  datasets: [
    {
      label: 'Conformité des FAR',
      data: [100, 96, 88, 88, 66, 100],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  scale: {
    ticks: { beginAtZero: false },
  },
};

const RadarChart = () => (
  
    <Radar data={data} options={options}/>
 
);

export default RadarChart;