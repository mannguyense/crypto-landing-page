const chart = new Chart(document.getElementById("token-sale"), {
  type: "doughnut",
  data: {
    labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
    datasets: [
      {
        label: "Token Sale",
        data: [39.2, 29.6, 20.4, 10.8],
        backgroundColor: ["#3e7dff", "#2347b9", "#8ba6ff", "#8696CA"],
        hoverOffset: 2,
      },
    ],
  },
});

// TODO: Dark mode code
// function checkDarkMode() {
//   if (localStorage.theme === 'dark') {
//     document.documentElement.classList.add('dark')
//   } else {
//     document.documentElement.classList.remove('dark')
//   }
// }

// checkDarkMode();

// document.getElementById('btn-switch').addEventListener('click', function () {
//   if (localStorage.theme === 'dark') {
//     localStorage.theme = 'light'
//   } else {
//     localStorage.theme = 'dark'
//   }
//   checkDarkMode();
// })

document.addEventListener("scroll", function (e) {
  const brandSection = document.getElementById("brand-section");
  if (isInViewport(brandSection)) {
    brandSection.classList.remove('opacity-0');
    brandSection.classList.add('animate-fade-in');
    brandSection.classList.add('opacity-1');
  }
});

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}
