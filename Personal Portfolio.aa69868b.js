// Current Date
const date = new Date();
let year = date.getFullYear();
const dateElement = document.querySelector('.date');
if (dateElement) dateElement.textContent = year;
//Hamburger Menu
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navLinks = document.querySelector(".nav-links");
function resetNav() {
    if (window.innerWidth > 800) {
        navLinks?.classList.remove("active");
        closeMenu?.classList.remove("active");
        openMenu?.classList.remove("active");
    }
}
window.addEventListener("resize", resetNav);
openMenu?.addEventListener("click", ()=>{
    navLinks?.classList.add("active");
    closeMenu?.classList.add("active");
    openMenu?.classList.add("active");
});
closeMenu?.addEventListener("click", ()=>{
    navLinks?.classList.remove("active");
    closeMenu?.classList.remove("active");
    openMenu?.classList.remove("active");
});
// Progress Bar Animation
const skillsetGrid = document.querySelector(".skillset-grid");
if (skillsetGrid) {
    const observerProgress = new IntersectionObserver((entries)=>{
        if (!entries[0].isIntersecting) return;
        const bars = document.querySelectorAll(".progress-fill");
        for (let bar of bars){
            const target = bar.getAttribute('data-target');
            bar.style.width = `${target}%`;
        }
        observerProgress.disconnect();
    }, {
        rootMargin: "0px 0px -400px 0px"
    });
    observerProgress.observe(skillsetGrid);
}
// Stats Animation
const statsSection = document.querySelector("#stats");
if (statsSection) {
    const observerStats = new IntersectionObserver((entries)=>{
        if (!entries[0].isIntersecting) return;
        const stats = document.querySelectorAll(".stat-number");
        for (let stat of stats){
            const originalText = stat.textContent;
            const target = +stat.getAttribute('data-target');
            let current = 0;
            const interval = setInterval(()=>{
                if (current >= target) {
                    clearInterval(interval);
                    return;
                }
                current += 1;
                stat.textContent = originalText.includes("%") ? `${current}%` : `${current}`;
            }, 1200 / target);
        }
        observerStats.disconnect();
    }, {
        rootMargin: "0px 0px -400px 0px"
    });
    observerStats.observe(statsSection);
}

//# sourceMappingURL=Personal Portfolio.aa69868b.js.map
