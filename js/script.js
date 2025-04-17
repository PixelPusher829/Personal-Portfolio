// Current Date
const d = new Date();
let year = d.getFullYear();

document.getElementById("date").innerHTML = year;
console.log(year);


//Progress Bar Animation
const skillsetGrid = document.querySelector(".skillset-grid");
const observerProgress = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    const progressBars = document.querySelectorAll(".progress-fill");
    progressBars.forEach(bar => {
      const target = bar.getAttribute('data-target');
      const duration = 0;
      let current = 0;
      const interval = setInterval(() => {
        if (current >= target) {
          clearInterval(interval);
          return;
        }
        current += 1;
        bar.style.width = `${current}%`;
      }, duration / target);
    });
    observerProgress.disconnect();
  }
}, { rootMargin: "0px 0px -400px 0px" });
observerProgress.observe(skillsetGrid);


//Stats Animaiton   
const stats = document.querySelector("#stats");
const observerStats = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    const stats = document.querySelectorAll(".stat-number");
    stats.forEach(stat => {
      const originalText = stat.textContent;
      const target = stat.getAttribute('data-target');
      const duration = 2000;
      let current = 0;
      const interval = setInterval(() => {
        if (current >= target) {
          clearInterval(interval);
          return;
        }
        current += 1;
        originalText.includes("%") ?
          stat.textContent = `${current}%` :
          stat.textContent = `${current}`;
      }, duration / target);
    });
    observerStats.disconnect();
  }
}, { rootMargin: "0px 0px -400px 0px" });
observerStats.observe(stats);