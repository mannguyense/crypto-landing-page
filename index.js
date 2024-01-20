const chart = new Chart(document.getElementById('token-sale'), {
    type: "doughnut",
  data: {
    labels: [
        'Series 1',
        'Series 2',
        'Series 3',
        'Series 4',
      ],
      datasets: [{
        label: 'Token Sale',
        data: [39.2, 29.6, 20.4, 10.8],
        backgroundColor: [
          '#3e7dff',
          '#2347b9',
          '#8ba6ff',
          '#8696CA',
        ],
        hoverOffset: 2
      }]
  },
})