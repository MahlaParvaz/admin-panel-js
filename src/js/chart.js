// bar graph
const xValues = ['January', '	February', 'March', 'April', 'May', 'June', 'July', 'August', '	September', 'October', 'November', 'December'];
const yValues = [100, 300, 200, 1000, 500, 600, 490, 800, 900, 600, 1200, 900];
const barColors = ['#9b5de5', '#f15bb5', '#fee440', '#00bbf9', '#00f5d4', '#9b5de5', '#f15bb5', '#fee440', '#00bbf9', '#00f5d4', '#9b5de5', '#f15bb5'];

new Chart('barGraph', {
  type: 'bar',
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    legend: { display: false },
  },
});
// doughnut charts
const ctx = document.getElementById('myPolarArea').getContext('2d');
const myPolarArea = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ['Flower', 'Plant', 'Cactus'],
    datasets: [
      {
        label: 'sale chart',
        data: [1200, 1900, 3000],
        backgroundColor: ['#1982c4', '#8ac926', '#ff595e'],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});
