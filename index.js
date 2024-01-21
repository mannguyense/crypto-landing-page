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

document.addEventListener("scroll", function (e) {
  const tokenList = document.getElementById("token-list");
  if (isInViewport(tokenList)) {
    alert('in view port')
  }
  console.log(isInViewport(tokenList));
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
